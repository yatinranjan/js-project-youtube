function calculateTotal(cart) {
  // Write your code here
  // Use the reduce method to calculate the total cost
  const total = cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
  }, 0);

  return total;
}
// Example 1
const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];
  console.log(calculateTotal(cart1)); // Output: 2200

// Example 2
const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
  ];
  
  console.log(calculateTotal(cart2)); // Output: 114

// Do not modify the below lines
module.exports = { calculateTotal };