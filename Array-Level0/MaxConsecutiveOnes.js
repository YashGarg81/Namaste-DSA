//Given a binary array nums, return the maximum number of consecutive 1’s in the array.
function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }

    // Final check in case the array ends with a sequence of 1s
    maxCount = Math.max(maxCount, currentCount);

    return maxCount;
}

let nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));  // ✅ Output: 3
// Time Complexity: O(n) - The algorithm traverses the array once, where n is the length of the array.
// Space Complexity: O(1) - The algorithm uses a constant amount of space for variables maxCount and currentCount.



