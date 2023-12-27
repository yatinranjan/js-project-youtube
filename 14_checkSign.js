module.exports = { checkSign };

function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    // Determine the signs of the numbers
    const sign1 = num1 > 0 ? '+' : '-';
    const sign2 = num2 > 0 ? '+' : '-';
    const sign3 = num3 > 0 ? '+' : '-';

    // Concatenate the signs to form the result string
    const result = sign1 + sign2 + sign3;

    return result;
}

// Example 1
console.log(checkSign(2, 5, 7));
// Output: "+++"

// Example 2
console.log(checkSign(8, -3, 4));
// Output: "+-+"