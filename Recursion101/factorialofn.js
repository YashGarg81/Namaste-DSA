// Write a recursive function fact(n) that returns the factorial of a number n.

function fact(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * fact(n - 1);
}   
// Example usage:
console.log(fact(5)); // Output: 120    
// Explanation: 5! = 5 * 4 * 3 * 2 * 1 = 120
console.log(fact(0)); // Output: 1
// Explanation: 0! = 1 by definition
console.log(fact(1)); // Output: 1
// Explanation: 1! = 1 by definition
console.log(fact(6)); // Output: 720
// Explanation: 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

//time complexity: O(n)
//space complexity: O(n) due to the recursive call stack

