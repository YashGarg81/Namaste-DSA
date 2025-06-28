// Sum of all numbers in array using Recursion
// Write a function sum(n) that calculates the sum of all numbers in an array arr using recursion. It sums from index 0 to n.

function sum(arr, n) {
    if (n <= 0) return 0; // Base case: if n is 0 or less, return 0
    return arr[n - 1] + sum(arr, n - 1); // Recursive call: add the last element and call sum for the rest
}

// Example usage
let arr = [1, 2, 3, 4, 5];
let n = arr.length;
console.log(sum(arr, n)); // Output: 15 (1 + 2 + 3 + 4 + 5)
// Time Complexity: O(n) - where n is the length of the array       
// Space Complexity: O(n) - due to the call stack used by recursion
// Explanation:
/* The function `sum` takes an array `arr` and a number `n` as input. If `n` is less than or equal to 0, it returns 0 (base case). Otherwise, it returns the last element of the array (at index `n - 1`) plus the result of calling `sum` with the same array and `n - 1`, effectively summing all elements from index 0 to n-1. This recursive approach continues until it reaches the base case, at which point it starts returning values back up the call stack, ultimately calculating the total sum of all numbers in the array. The time complexity is O(n) because the function makes `n` recursive calls, and the space complexity is also O(n) due to the call stack used by recursion. This is a simple and efficient way to calculate the sum of all numbers in an array using recursion. */
// Note: Ensure that the input array is not empty and n is a valid index to avoid errors. If `n` is greater than the length of the array, it will still work but will not include elements beyond the array's length.

