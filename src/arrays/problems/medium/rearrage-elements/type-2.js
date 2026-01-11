// * What happens if the length of +ve and -ve elements are not same.
const rearrageElements = arr => {
    const positive = [];
    const negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i])
        } else {
            positive.push(arr[i])
        }
    }

    if (positive.length > negative.length) {
        let i;
        for (i = 0; i < negative.length; i++) {
            arr[i * 2] = positive[i]
            arr[i * 2 + 1] = negative[i]
        }

        let idx = negative.length * 2
        for (let i = negative.length; i < positive.length; i++) {
            arr[idx] = positive[i];
            idx++
        }

    } else {
        for (let i = 0; i < positive.length; i++) {
            arr[i * 2] = positive[i]
            arr[i * 2 + 1] = negative[i]
        }

        let idx = positive.length * 2
        for (let i = positive.length; i < negative.length; i++) {
            arr[idx] = negative[i];
            idx++
        }
    }

    return arr
}

console.log(rearrageElements([1, 2, 4, -2, -4, 3]))