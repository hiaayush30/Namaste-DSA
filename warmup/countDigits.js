const n = -243;

const countDigits = (n) => {
    n = Math.abs(n);
    if (n == 0) return 1;
    let count = 0;
    while (n > 0) {
        count++;
        n = Math.trunc(n / 10)
    }
    return count;
}

console.log(countDigits(n))