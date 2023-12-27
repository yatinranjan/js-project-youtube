module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code here
    
    const primes = [];

    // Helper function to check if a number is prime
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    // Iterate through numbers from 2 to n and add prime numbers to the array
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}

// Example 1
console.log(findPrimes(20));
// Output: [2, 3, 5, 7, 11, 13, 17, 19]

// Example 2
console.log(findPrimes(9));
// Output: [2, 3, 5, 7]