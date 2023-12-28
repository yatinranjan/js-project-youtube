function countVowels(str) {
    // Write your code here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < lowerStr.length; i++) { // changed <= to < in the loop condition to iterate up to last index of the string.
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
// Example 1
console.log(countVowels("AlmaBetter")); // output: 4
// Example 2
console.log(countVowels("Coding is fun with fellow learners")); // output: 10
// Do not modify the below lines
module.exports = { countVowels };