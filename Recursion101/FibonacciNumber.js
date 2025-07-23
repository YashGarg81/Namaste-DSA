// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

function fibonacci(n) {
    if (n < 0) return "Input should be a non-negative integer"; // Handle negative input
    if (n === 0) return 0; // Base case for F(0)
    if (n === 1) return 1; // Base case for F(1)
    
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}   

// Example usage
let n = 5;  
console.log(fibonacci(n)); // Output: 5
// Time Complexity: O(2^n) - exponential time complexity due to the overlapping sub
// problems in the recursive calls
// Space Complexity: O(n) - due to the call stack used by recursion
// Note: This implementation is not efficient for large n due to its exponential time complexity.
// For larger values of n, consider using memoization or an iterative approach to improve efficiency.
// Memoization to optimize Fibonacci calculation
function fibonacciMemo(n, memo = {}) {
    if (n < 0) return "Input should be a non-negative integer"; // Handle negative input
    if (n in memo) return memo[n]; // Return cached result if available
    if (n === 0) return 0; // Base case for F(0)
    if (n === 1) return 1; // Base case for F(1)

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo); // Store result in cache
    return memo[n];
}
// Example usage with memoization
let nMemo = 5;
console.log(fibonacciMemo(nMemo)); // Output: 5
// Time Complexity: O(n) - linear time complexity due to memoization
// Space Complexity: O(n) - due to the call stack and memoization storage
// This implementation is efficient for larger values of n compared to the naive recursive approach.
// Iterative approach to calculate Fibonacci numbers
function fibonacciIterative(n) {
    if (n < 0) return "Input should be a non-negative integer"; // Handle negative input
    if (n === 0) return 0; // Base case for F(0)
    if (n === 1) return 1; // Base case for F(1)

    let a = 0, b = 1; // Initialize the first two Fibonacci numbers
    for (let i = 2; i <= n; i++) {
        let temp = a + b; // Calculate the next Fibonacci number
        a = b; // Update a to the previous Fibonacci number
        b = temp; // Update b to the current Fibonacci number
    }
    return b; // Return the nth Fibonacci number
}
// Example usage with iterative approach
let nIterative = 5;
console.log(fibonacciIterative(nIterative)); // Output: 5
// Time Complexity: O(n) - linear time complexity due to the single loop
// Space Complexity: O(1) - constant space complexity as only a few variables are used
// This implementation is efficient for large n and avoids the overhead of recursion and memoization.
// This iterative approach is the most efficient for calculating Fibonacci numbers in terms of both time and space complexity.
// Example usage
let nExample = 10;
console.log(fibonacci(nExample)); // Output: 55
// Example usage with memoization
console.log(fibonacciMemo(nExample)); // Output: 55
// Example usage with iterative approach
console.log(fibonacciIterative(nExample)); // Output: 55
