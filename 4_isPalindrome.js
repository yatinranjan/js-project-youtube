function isPalindrome(str) {
    // Write your code here
    // Convert the input string to lowercase
    const lowercaseStr = str.toLowerCase();

    // Remove any non-alphanumeric characters (including spaces and punctuation)
    const cleanedStr = lowercaseStr.replace(/[^a-z0-9]/g, "");

    // Compare the modified string with its reverse
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Return a boolean value indicating whether the input string is a palindrome
    return cleanedStr === reversedStr;
}
// Example 1
console.log(isPalindrome("RaceCar")); // true
// Example 2
console.log(isPalindrome("Hello"));   // false

// Do not modify the below lines
module.exports = { isPalindrome };