function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}

console.log(findLongestWord("Coding is fun with fellow learners"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// Do not modify the below lines
module.exports = { findLongestWord };