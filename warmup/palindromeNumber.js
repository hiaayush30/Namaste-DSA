// example => -121 palindrome is 121- so it should return false
const isPalindrome = function (x) {
    if (x < 0) return false;
    const arr = String(x).split("");
    console.log(arr)
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(121))

// another way is to reverse the number and check 
const isPalindrome1 = (x) => {
    if (x < 0) return false;
    let reversed = 0;
    let xCopy = x;
    while (x > 0) {
        let remainder = x % 10;
        reversed = reversed * 10 + remainder;
        x = Math.trunc(x / 10);
    }
    return reversed == xCopy
}


console.log(isPalindrome1(121))