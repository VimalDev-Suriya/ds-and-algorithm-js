/**
 * Exponential Backoff is startegy, where we will rety the API call in a exponential manner for the limited amount of time. Which primarily reduce the request surge to the API if there is any downtime.
 */
const exponentialBackoff = async (
    cb,
    maxRetry = 5,
    baseDelay = 1000,
    maxDelay = 32000,
    shouldRetry = (error) => true, // a key cb function to determine whether we need to trigger the retry, controlled by parent
    onRetry = () => { } // we can us this to perform some logging to debug the issue, the function definition will be in parent
) => {
    let lastError;

    for (let attempt = 1; attempt <= maxRetry; attempt++) {
        try {
            // * No major validation if request is processed successfully.
            return await cb();
        } catch (error) {
            // * Just to maintain the final error that we got post exhausting the retries.
            lastError = error;

            if (!shouldRetry(error)) {
                // Throwing error, so the top level handlers will catch those.
                throw error;
            }

            if (attempt === maxRetry) {
                break
            }

            onRetry(error, attempt);

            const exponentialDelay = baseDelay * Math.pow(2 * attempt);

            // Jitter to solve thundering herd
            const jitter = Math.random() * (0.5 * exponentialDelay);
            const finalDelay = jitter + exponentialDelay;

            const delay = Math.min(finalDelay, maxDelay);

            await new Promise(resolve => setTimeout(resolve, delay))
        }
    }

    // * returning the final error
    return lastError;
} 