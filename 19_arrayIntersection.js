module.exports = { arrayIntersection };

function arrayIntersection(array1, array2) {
    // Write your code inside this function only.
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const intersection = [...set1].filter(element => set2.has(element));
    return intersection;
}

// Example 1
console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));
// Output: [2, 3]

// Example 2
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70]));
// Output: [30, 50, 70]