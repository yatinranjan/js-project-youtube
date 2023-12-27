module.exports = { insert7 };

function insert7(inputString) {
    // Write your code inside this function only.
     const charArray = inputString.split('');
    let count = 0;

    for (let i = 0; i < charArray.length; i++) {
        if (charArray[i] !== ' ') {
            count++;
            if (count % 6 === 0) {
                charArray.splice(i + 1, 0, '7');
                count = 0; // reset count after insertion
            }
        }
    }

    return charArray.join('');
}

// Example 1
console.log(insert7("Hello World and Universe!"));
// Output: "Hello W7orld an7d Unive7rse!"

// Example 2
console.log(insert7("Full Stack Web Development"));
// Output: "Full St7ack Web7 Develo7pment"