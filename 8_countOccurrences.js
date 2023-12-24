function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences("hello world", "l"));
console.log(countOccurrences("Elephant", "E"));

// Do not modify the below lines
module.exports = { countOccurrences };