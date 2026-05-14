// TC => O(log10 N), where N is the number
const count = n => {
    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return count;
}

console.log(count(123456))
