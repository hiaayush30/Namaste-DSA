// Unlike Python, where the modulo operator's result always takes the sign of the divisor,
// JavaScript's modulo operator returns a result that takes the sign of the dividend

const reverse = function (x) {
    let reversed = 0;
    while (Math.abs(x) > 0) {
        let rem = x % 10;
        reversed = reversed * 10 + rem;
        x = Math.trunc(x / 10)
    }
    if (Math.abs(reversed) > Math.pow(2, 31) - 1) return 0
    return reversed
};

console.log(reverse(-1234))