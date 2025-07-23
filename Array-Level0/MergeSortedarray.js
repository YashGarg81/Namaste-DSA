// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Approach 1

function merge(nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
            nums1[i] = nums1Copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);  // ✅ Output: [1, 2, 2, 3, 5, 6]

//Time Complexity 
//Copying the first m elements to nums1Copy takes O(m).
//Merging the two sorted arrays takes O(m + n) because each index in nums1 is visited exactly once.

// Space Complexity

//We create a copy of the first m elements of nums1 in nums1Copy, which takes O(m) additional space.

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.Merge nums1 and nums2 into a single array sorted in non-decreasing order.The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


// Overall: O(m)

// Approach 2

function merge(nums1, m, nums2, n){
    let p1 = m-1;
    let p2 = n-1;

    for (let i=m+n-1;i>=0;i--){
        if(p2 < 0)
        break ;
        if(p1>=0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        }
        else {
            nums1[i]=nums2[p2];
            p2--;
        }
    }
}

 nums1 = [1, 2, 3, 0, 0, 0];
 m = 3;
 nums2 = [2, 5, 6];
 n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); //  // ✅ Output: [1, 2, 2, 3, 5, 6]


//Time Complexity 
//We traverse the combined length of both arrays exactly once, i.e., m + n times.Each step is O(1).
//Overall = O(m+n)

// Space Complexity

//No extra significant space is used (in-place). Only a few variables (p1, p2, i) are used.
// Overall: O(1)