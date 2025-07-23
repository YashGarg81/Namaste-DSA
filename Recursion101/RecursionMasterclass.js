/* The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n). */
// recursive implementation of Fibonacci sequence
// This implementation is not efficient for large n due to repeated calculations. Consider using memoization or an iterative approach for better performance.

function fibonacci(n) {
    if (n<=1)
        return n; // Base case: F(0) = 0, F(1) = 1
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case:
}

// Example usage:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 2
console.log(fibonacci(4)); // Output: 3

// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
// Time complexity: O(2^n) due to the exponential growth of recursive calls
// Space complexity: O(n) due to the recursive call stack
// Note: This implementation is not efficient for large n due to repeated calculations. Consider using memoization or an iterative approach for better performance. 
// Example usage:
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(7)); // Output: 13
console.log(fibonacci(8)); // Output: 21

// itterative approach for better performance
function fibonacciIterative(n) {
    if (n <= 1) return n; // Base case: F(0) = 0, F(1) = 1
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b; // Calculate the next Fibonacci number
        a = b; // Move to the next pair
        b = temp;
    }
    return b; // Return the nth Fibonacci number
}
console.log(fibonacciIterative(0)); // Output: 0
console.log(fibonacciIterative(1)); // Output: 1