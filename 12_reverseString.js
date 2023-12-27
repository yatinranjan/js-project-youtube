module.exports = { reverseString };

function ReverseString(str) {
    return str.split('').reverse().join('')
}
// Example 1
console.log(ReverseString("JavaScript"));
// output: tpircSavaJ
// Example 2
console.log(ReverseString("AlmaBetter University"));
// output: ytisrevinU retteBamlA