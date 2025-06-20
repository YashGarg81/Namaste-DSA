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

let nums=[0,1,0,3,12];

moveZeros(nums);
console.log (nums);