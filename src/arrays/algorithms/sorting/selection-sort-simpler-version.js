const selectionSort = (arr) => {
    let lowest;

    for (let i = 0; i < arr.length; i++) {
        lowest = i; // considering the element as the lowest element's idx

        for (let j = i + 1; j < arr.length; j++) {
            // * if the lowest idx is greater than the j, then assigning the lowest as j
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }

        // swapping the lowest with i
        if (i !== lowest) {
            [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
        }
    }

    return arr;
}

console.log(selectionSort([6, 3, 1, 7, -1, 30, -2, 10]))