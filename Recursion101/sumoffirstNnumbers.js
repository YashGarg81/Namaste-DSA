// Write a function sum(n) that calculates the sum of the first n natural numbers using recursion.
function sum(n) {
    if (n <= 0) return 0; // Base case
    return n + sum(n - 1); // Recursive call
}

// Example usage
let n = 5;
console.log(sum(n)); // Output: 15 (1 + 2 + 3 + 4 + 5)
// Time Complexity: O(n) - where n is the input number
// Space Complexity: O(n) - due to the call stack used by recursion

// Explanation:
/* The function `sum` takes a natural number `n` as input.If `n` is less than or equal to 0, it returns 0 (base case). Otherwise, it returns the sum of `n` and the result of calling `sum` with `n - 1`, effectively adding all natural numbers from `n` down to 1. This recursive approach continues until it reaches the base case, at which point it starts returning values back up the call stack, ultimately calculating the total sum of the first `n` natural numbers. The time complexity is O(n) because the function makes `n` recursive calls, and the space complexity is also O(n) due to the call stack used by recursion.This is a simple and efficient way to calculate the sum of the first `n` natural numbers using recursion.*/
