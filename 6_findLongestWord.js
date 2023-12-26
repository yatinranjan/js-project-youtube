function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) { //rewritten code using a "for...of" loop
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}
// Example 1
console.log(findLongestWord("Coding is fun with fellow learners")); // output 8
// Example 2
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //output 6
// Do not modify the below lines
module.exports = { findLongestWord };