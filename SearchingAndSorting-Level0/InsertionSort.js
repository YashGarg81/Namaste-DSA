function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Example usage:
const numbers = [9, 3, 5, 1, 7];
console.log('Sorted array:', insertionSort(numbers));
// Output: Sorted array: [1, 3, 5, 7, 9]
// This function sorts an array using the insertion sort algorithm.
// It iterates through the array, inserting each element into its correct position in the sorted portion of the array.
// The time complexity is O(n^2) in the worst case, making it less efficient
// for large datasets compared to more advanced algorithms like quicksort or mergesort.
// However, it is simple and works well for small or nearly sorted arrays.
// The function modifies the original array and returns the sorted array.
// The insertion sort algorithm is a stable sorting algorithm, meaning that it maintains the relative order of
// equal elements in the sorted array.
// It is often used for small datasets or as part of more complex algorithms.