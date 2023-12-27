module.exports = { findMove };

function findMove(s) {
    // Write your code inside this function only.
    const result = [];

    for (let i = 0; i < s.length - 1; i++) {
        if (s.substring(i, i + 2) === "++") {
            result.push(s.substring(0, i) + "--" + s.substring(i + 2));
        }
    }

    return result;
}

// Example 1
const input1 = "++++";
console.log(findMove(input1));
// Output: ["--++", "+--+", "++--"]

// Example 2
const input2 = "++-++";
console.log(findMove(input2));
// Output: ["---++", "++---"]