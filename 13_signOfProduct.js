module.exports = { signOfProduct };

function signOfProduct(nums) {
    // Write your code inside this function only.
let numberOfNegatives = 0;

    for (let num of nums) {
        if (num < 0) {
            numberOfNegatives++;
        }
    }

    if (numberOfNegatives % 2 === 0) {
        return 1; // Product is positive
    } else {
        // If the number of negatives is odd, the product is negative
        // If there are zeros, the product is zero
        return nums.includes(0) ? 0 : -1;
    }
}
// Example 1
console.log(signOfProduct([2, -3, 5, 4]));
// Output: -1

// Example 2
console.log(signOfProduct([1, 2, 0]));
// Output: 1