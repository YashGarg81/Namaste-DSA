/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1*/

function binarySearch(nums, target) { 
    let left = 0;
    let right = nums.length - 1;
    while (right => left) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid; // Return the index of the target if found
        } else if (nums[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if target is not found in the array
}

let nums = [-1, 0, 3, 5, 9, 12];
let result = binarySearch(nums, 5);
console.log(result); // Output: 4 (index of the target 9 in the array)

// Time Complexity: O(log n) - logarithmic time complexity as we are halving the search space in each iteration
// Space Complexity: O(1) - constant space complexity as we are using a fixed amount of space regardless of the input size
// This implementation is efficient for large sorted arrays due to its logarithmic time complexity.
