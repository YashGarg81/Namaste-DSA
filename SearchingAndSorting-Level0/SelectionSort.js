function selectionsort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// Example usage:
let arr = [64, 25, 12, 22, 11];
let sortedArr = selectionsort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 64]
// Time Complexity: O(n^2) - quadratic time complexity due to nested loops
// Space Complexity: O(1) - constant space complexity as we are using a fixed amount of space regardless of the input size
// This implementation is simple and works well for small to medium-sized arrays, but may not be efficient for large arrays due to its quadratic time complexity.  
