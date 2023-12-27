function countOccurrences(str, char) {
    // Write your code here
    // Use split and filter to count occurrences
    const count = str.split(char).length - 1;
    return count;
}
// Example 1
console.log(countOccurrences("hello world", "l")); // output: 3
// Example 2
console.log(countOccurrences("Elephant", "E"));  // output: 1

// Do not modify the below lines
module.exports = { countOccurrences };