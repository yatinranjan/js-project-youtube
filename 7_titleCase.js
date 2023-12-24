function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

return words.join(' ');
}
console.log(titleCase("Dream big, work hard, and stay focused"));
console.log(titleCase("Be yourself; everyone else is already taken."));
// Do not modify the below lines
module.exports = { titleCase };