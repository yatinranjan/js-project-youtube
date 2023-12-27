function titleCase(sentence) {
	// write your code here
    // Convert the sentence to lowercase and split it into words
    const words = sentence.toLowerCase().split(' ');

    // Use the map method to transform each word
    const titleCaseWords = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
    });

    // Join the words back into a sentence
    return titleCaseWords.join(' ');
}
// Example 1
console.log(titleCase("Dream big, work hard, and stay focused")); 
// output: Dream Big, Work Hard, And Stay Focused
// Example 2
console.log(titleCase("Be yourself; everyone else is already taken.")); 
// output : Be Yourself; Everyone Else Is Already Taken.
// Do not modify the below lines
module.exports = { titleCase };