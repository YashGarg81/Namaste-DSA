// Write a program to print all even numbers from an array.

// Example array: [10, 3, 5, 2, 7, 6, 9]

// Expected Output: 10 2 6

const arr = [10, 3, 5, 2, 7, 6, 9];
function evenNumberFromArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

evenNumberFromArray(arr);
