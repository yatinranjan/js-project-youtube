function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return Number(totalAmount.toFixed(2)); // I have changed the function number with Number
}

// Do not modify the below lines
module.exports = { calculateTip };
// Example 1
console.log(calculateTip(60.75, 0.25)); // output 75.94
// Exmaple 2
console.log(calculateTip(90.00, 0.10)); // output 99.00

// Do not modify the below lines
module.exports = { calculateTip };