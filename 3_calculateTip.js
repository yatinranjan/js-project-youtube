function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return (totalAmount.toFixed(2));
}

console.log(calculateTip(60.75, 0.25));
console.log(calculateTip(90.00, 0.10));

// Do not modify the below lines
module.exports = { calculateTip };