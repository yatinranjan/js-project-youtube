function isPalindrome(str) {
    // Write your code here
    const cleanedStr = str.replace(/[^a-z0-9]/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("Hello"));

// Do not modify the below lines
module.exports = { isPalindrome };