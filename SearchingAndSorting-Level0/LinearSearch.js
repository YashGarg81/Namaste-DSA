function linearsearch(arr, target) {
    for (let i = 0 ; i<arr.length;i++) {
        if (arr[i]===target){
            return i; // Return the index of the first occurrence of i
        } 
}
return -1; // Return -1 if i is not found in the array  }
}
let arr = [1, 2, 3, 4, 10, 5, 10];
let result = linearsearch(arr, 10);
console.log(result); // Output: 4 (index of the first occurrence of 10 in the array)

// Time Complexity: O(n) - linear time complexity as we may need to check each element in the array
// Space Complexity: O(1) - constant space complexity as we are using a fixed amount of space regardless of the input size

// This implementation is straightforward and works well for small to moderate-sized arrays.

