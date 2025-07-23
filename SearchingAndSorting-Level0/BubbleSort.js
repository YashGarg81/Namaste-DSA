// Approach 1
function BubbleSort(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr.length - i - 1; j++) {
           if (arr[j] > arr[j + 1]) {
               // Swap the elements
               let temp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = temp;
           }
       }
   }
    return arr; // Return the sorted array
}   
// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
let sortedArr = BubbleSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 34, 64, 90]
// Time Complexity: O(n^2) - quadratic time complexity due to nested loops          
// Space Complexity: O(1) - constant space complexity as we are using a fixed amount of space regardless of the input size
// This implementation is simple and works well for small to medium-sized arrays, but may not be efficient for large arrays due to its quadratic time complexity.
// Time Complexity: O(log n) - logarithmic time complexity as we are halving the search space in each iteration

// Approach 2
<<<<<<< HEAD
=======

>>>>>>> dc49bd3 (Selection sort)
function BubbleSort(arr) {
    let swapped;
    // Continue looping until no swaps are made
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr; // Return the sorted array
}
// Example usage:
let arr1  = [64, 34, 25, 12, 22, 11, 90];
let sortedArr1 = BubbleSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 34, 64, 90]
// Time Complexity: O(n^2) - quadratic time complexity due to nested loops      
// Space Complexity: O(1) - constant space complexity as we are using a fixed amount of space regardless of the input size
// This implementation is simple and works well for small to medium-sized arrays, but may not be
// efficient for large arrays due to its quadratic time complexity.
// This implementation of Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until no swaps are needed, indicating that the list is sorted.
