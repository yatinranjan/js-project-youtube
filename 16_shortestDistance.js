module.exports = { shortestDistance };

function shortestDistance(wordsDict, word1, word2) {
    // Write your code inside this function only.
    let pos1 = -1;
    let pos2 = -1;
    let minDistance = Infinity;

    for (let i = 0; i < wordsDict.length; i++) {
        if (wordsDict[i] === word1) {
            pos1 = i;
        } else if (wordsDict[i] === word2) {
            pos2 = i;
        }

        if (pos1 !== -1 && pos2 !== -1) {
            minDistance = Math.min(minDistance, Math.abs(pos1 - pos2));
        }
    }

    return minDistance;
}

// Example 1
const wordsDict1 = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict1, "coding", "makes"));
// Output: 1

// Example 2
const wordsDict2 = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];
console.log(shortestDistance(wordsDict2, "apple", "fig"));
// Output: 3