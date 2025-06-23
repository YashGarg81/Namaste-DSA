//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.You must implement a solution with a linear runtime complexity and use only constant extra space.

//Approach 1: Brute Force (Hash Map)

function singleNumber(nums) {
    let hash ={};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
     for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === 1) {
            return nums[i];
        }
}  
}

let nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums)); // Output: 4

//time complexity: O(n)
//space complexity: O(n)

//Approach 2: Bit Manipulation (XOR)

//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums1) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

let nums1 = [4, 1, 2, 1, 2];
console.log(singleNumber(nums1)); // Output: 4   

//time complexity: O(n)
//space complexity: O(1)
