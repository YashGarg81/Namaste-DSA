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


// Problem question 2 : Sum of odd numbers in array using Recursion
// Write a recursive function sum(n) that calculates the sum of all odd numbers in an array arr up to index n

function sumOdd(arr, n) {
    if (n <= 0) return 0; // Base case: if n is 0 or less, return 0
    let current = arr[n - 1] % 2 !== 0 ? arr[n - 1] : 0; // Check if the last element is odd
    return current + sumOdd(arr, n - 1); // Recursive call: add the last odd element and call sumOdd for the rest
} 

// Example usage
let arr2 = [1, 2, 3, 4, 5];
let n2 = arr2.length;
console.log(sumOdd(arr2, n2)); // Output: 9 (1 + 3 + 5)
// Time Complexity: O(n) - where n is the length of the array
// Space Complexity: O(n) - due to the call stack used by recursion


// Problem question 3 : Sum of even numbers in array using Recursion
// Write a recursive function sum(n) that calculates the sum of all even numbers in an array    

function sumEven(arr, n) {
    if (n <= 0) return 0; // Base case: if n is 0 or less, return 0
    let current = arr[n - 1] % 2 === 0 ? arr[n - 1] : 0; // Check if the last element is even
    return current + sumEven(arr, n - 1); // Recursive call: add the last even element and call sumEven for the rest
}
// Example usage
let arr3 = [1, 2, 3, 4, 5];
let n3 = arr3.length;
console.log(sumEven(arr3, n3)); // Output: 6 (2 + 4)
// Time Complexity: O(n) - where n is the length of the array       
// Space Complexity: O(n) - due to the call stack used by recursion