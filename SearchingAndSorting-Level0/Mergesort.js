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

// Sort an array
// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

 

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessarily unique.
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

function sortArray(nums) {
    if (nums.length <= 1) {
        return nums; // An array with 0 or 1 element is already sorted
    }

    // Find the middle point to divide the array into two halves
    const mid = Math.floor(nums.length / 2);
    const leftHalf = nums.slice(0, mid);
    const rightHalf = nums.slice(mid);

    // Recursively sort both halves
    const sortedLeft = sortArray(leftHalf);
    const sortedRight = sortArray(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and add the smaller one to the result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left array
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Add any remaining elements from the right array
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example Usage:
const nums1 = [5, 2, 3, 1];
console.log(`Input: [${nums1}]`);
console.log(`Output: [${sortArray(nums1)}]`); // Output: [1,2,3,5]

const nums2 = [5, 1, 1, 2, 0, 0];
console.log(`Input: [${nums2}]`);
console.log(`Output: [${sortArray(nums2)}]`); // Output: [0,0,1,1,2,5]
