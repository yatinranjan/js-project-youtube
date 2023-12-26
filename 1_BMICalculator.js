function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height); 

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) { // corrected logical opetor symbol with &&
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) { // corrected logical opetor symbol with &&
        return "Overweight";
    } else {
        return "Obese";
    }
}
// Example 1
console.log(calculateBMI(65, 1.75)); // output Normal weight
// Example 2
console.log(calculateBMI(45, 1.60)); // output Underweight

// Do not modify the below lines
module.exports = { calculateBMI };