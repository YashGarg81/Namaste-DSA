// This code demonstrates a simple recursive function that counts down from a given number to -1.
// The function `fun` takes a number as an argument and prints it, then calls itself with the number decremented by 1 until it reaches -1, at which point it stops calling itself.
// The variable `a` is initialized to 5, and the function is called with this value.
// This is a basic example of recursion, where a function calls itself with modified arguments until a base case is reached.
// This code demonstrates a simple recursive function that counts down from a given number to -1.   
function fun (num){
if(num == -1) return; // Base case
console.log(num);
num = num - 1;
fun(num);
}
a = 5;
fun(a);

// Output: 5 4 3 2 1 0 
// Time Complexity: O(n) - where n is the initial value of num
// Space Complexity: O(n) - due to the call stack used by recursion 

// Stack Overflow 

function fun (num){
console.log(num);
num = num - 1;
fun(num);
}
a = 5;
fun(a);

// Output: This will cause a stack overflow error because there is no base case to stop the recursion.
// Time Complexity: O(n) - where n is the initial value of num

// Print n to 1 using recursion
function printNto1(n) {
    if (n < 1) return; // Base case
    console.log(n);
    printNto1(n - 1); // Recursive call
}

// Example usage
let n = 5;
printNto1(n);
// Output: 5 4 3 2 1
// Time Complexity: O(n) - where n is the initial value of n
// Space Complexity: O(n) - due to the call stack used by recursion


// Print 1 to n using recursion
function print1toN(n) {
    if (n < 1) return; // Base case
    print1toN(n - 1); // Recursive call
    console.log(n); // Print after the recursive call
} 
// Example usage
let n1 = 5
print1toN(n1);
// Output: 1 2 3 4 5
// Time Complexity: O(n) - where n is the initial value of n
// Space Complexity: O(n) - due to the call stack used by recursion


// Factorial using recursion

function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursive call
}  
// Example usage
let num = 5;        
console.log(factorial(num)); // Output: 120
// Time Complexity: O(n) - where n is the value of num
// Space Complexity: O(n) - due to the call stack used by recursion


