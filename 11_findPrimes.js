module.exports = { findPrimes };

function findPrimes(n) {
    // Write your code here
        const arr = [];
        for (let i = 2; i <= n;  i++) {
          let isPrime = true;
          let root = Math.floor(Math.sqrt(i));
          for (let j = 2; j <= root; j++) {
            if (i % j === 0) {
              isPrime = false;
              break;
            }
          }
          if (isPrime) {
            arr.push(i);
          }
        }
        return arr;
      }
      
      console.log(findPrimes(20));
      console.log(findPrimes(9));