/**
 * Exponential Backoff is startegy, where we will rety the API call in a exponential manner for the limited amount of time. Which primarily reduce the request surge to the API if there is any downtime.
 */
const exponentialBackoff = async(
    cb,
    maxRetry=5,
    baseDelay=1000,
    maxDelay=32000,
    shouldRetry = (error) => true,
    onRetry = () => {}
) => {
    let lastError;

    for(let attempt = 0; attempt < maxRetry; attempt++){
        try {
            return await cb();
        } catch (error) {
            lastError = error;

            if(!shouldRetry(error)){
                // Throwing error, so the top level handlers will catch those.
                throw error;
            }

            if(attempt === maxRetry - 1){
                break
            }

            const exponentialDelay = baseDelay * Math.pow(2 * attempt);
            
            // Jitter to solve thundering herd
            const jitter = Math.random() * (0.5 * exponentialDelay);
            const finalDelay = jitter + exponentialDelay;

            const delay = Math.min(finalDelay, maxDelay);

            await new Promise(resolve => setTimeout(resolve, delay))
        }
    }

    return lastError;
} 