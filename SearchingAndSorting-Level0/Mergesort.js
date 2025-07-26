/**
 * Implements the Merge Sort algorithm to sort an array of numbers.
 * Merge Sort is a divide-and-conquer algorithm that recursively
 * divides an array into two halves, sorts them, and then merges
 * the sorted halves.
 *
 * @param {number[]} arr The array to be sorted.
 * @returns {number[]} A new array containing the sorted elements.
 */
function mergeSort(arr) {
    // Base case: If the array has 0 or 1 element, it's already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point to divide the array into two halves.
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively sort the two halves.
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves back together.
    return merge(sortedLeft, sortedRight);
}

/**
 * Merges two sorted arrays into a single sorted array.
 * This is the core operation of Merge Sort.
 *
 * @param {number[]} leftArr The first sorted array.
 * @param {number[]} rightArr The second sorted array.
 * @returns {number[]} A new array containing all elements from both
 * input arrays, sorted.
 */
function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and add the smaller one to the result.
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left array (if any).
    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    // Add any remaining elements from the right array (if any).
    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}

// --- Example Usage ---
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", unsortedArray);

const sortedArray = mergeSort(unsortedArray);
console.log("Sorted array (Merge Sort):", sortedArray);

const anotherArray = [5, 2, 9, 1, 5, 6, 0, 7];
console.log("\nAnother original array:", anotherArray);
const anotherSortedArray = mergeSort(anotherArray);
console.log("Another sorted array (Merge Sort):", anotherSortedArray);

const emptyArray = [];
console.log("\nEmpty array:", emptyArray);
const sortedEmptyArray = mergeSort(emptyArray);
console.log("Sorted empty array:", sortedEmptyArray);

const singleElementArray = [42];
console.log("\nSingle element array:", singleElementArray);
const sortedSingleElementArray = mergeSort(singleElementArray);
console.log("Sorted single element array:", sortedSingleElementArray);
