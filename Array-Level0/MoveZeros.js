// Given an integer array nums, move all 0’s to the end of it while maintaining the relative order of the non-zero elements.Note: You must do this in-place without making a copy of the array.

function moveZeros(nums){
    let x = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] !==0){
            nums[x]=nums[i];
            x++;
        }
    }
    //Fill all the reamining elements to zero
    for(let i= x; i<nums.length;i++){
        nums[i]=0;
    }
}

let nums=[0,0,0,0,0];

moveZeros(nums);
console.log (nums);

// Time Complexity:

// O(n) – The algorithm traverses the array twice independently:

// First loop processes all n elements to shift non-zero values.

// Second loop runs k times (where k = number of zeros, k ≤ n).
// Total operations: n + k → O(n)

// Space Complexity:

// O(1) – Uses only constant extra space (variables x and i), modifying the array in-place