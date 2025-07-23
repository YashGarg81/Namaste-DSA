//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Approach 1-
function missingNumber(nums) {
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = nums.reduce((acc, num) => acc + num, 0); // Sum of elements in the array
    return expectedSum - actualSum; // The missing number
}

let  nums = [3, 0, 1]; // Example input
console.log(missingNumber(nums)); // Output: 2
// Time Complexity:
// O(n) – The algorithm traverses the array once to calculate the sum of its elements   
// Space Complexity:
// O(1) – Uses only constant extra space (variables n, expectedSum, actualSum)

// Approach 2 - 

function missingNumber(nums) {
    let PartialSum = 0;
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    for (let i=0;i<nums.length;i++){
        PartialSum = PartialSum + nums[i]; // Calculate the sum of elements in the array
    } // Sum of elements in the array
    return expectedSum - PartialSum; // The missing number
}

let nums = [3, 0, 1]; // Example input
console.log(missingNumber(nums)); // Output: 2

// Time Complexity:
// O(n) – The algorithm traverses the array once to calculate the sum of its elements   
// Space Complexity:
// O(1) – Uses only constant extra space (variables PartialSum, n, expectedSum)