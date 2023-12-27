module.exports = { swapConsecutiveCharacters };

function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
    const charArray = str.split('');
    for (let i = 0; i < charArray.length - 1; i += 2) {
        const temp = charArray[i];
        charArray[i] = charArray[i + 1];
        charArray[i + 1] = temp;
    }
    return charArray.join('');
}

// Example 1
console.log(swapConsecutiveCharacters("abcdef"));
// Output: "badcfe"

// Example 2
console.log(swapConsecutiveCharacters("AlmaBetter"));
// Output: "lAameBttre"