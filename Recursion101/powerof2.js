// Write a recursive function isPowerOfTwo(n) that returns true if n is a power of 2, otherwise false.

function isPowerOfTwo(n) {
    // Base case: if n is less than or equal to 0, return false
    if (n <= 0) {
        return false;
    }
    // Base case: if n is 1, return true (2^0 = 1)
    if (n === 1) {
        return true;
    }
    // Recursive case: check if n is divisible by 2 and call the function with n divided by 2
    if (n % 2 === 0) {
        return isPowerOfTwo(n / 2);
    }
    // If n is not divisible by 2, it is not a power of 2
    return false;
}

// Example usage:
console.log(isPowerOfTwo(1)); // Output: true
// Explanation: 2^0 = 1
console.log(isPowerOfTwo(2)); // Output: true
// Explanation: 2^1 = 2
console.log(isPowerOfTwo(3)); // Output: false
// Explanation: 3 is not a power of 2
console.log(isPowerOfTwo(4)); // Output: true
// Explanation: 2^2 = 4     

//time complexity: O(log n) because we are dividing n by 2 in each recursive call
//space complexity: O(log n) due to the recursive call stack