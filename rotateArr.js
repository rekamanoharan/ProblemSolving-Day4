// 4.Write a function to rotate an array to the right by k steps.

function rotateArray(arr, k) {
  const n = arr.length;
  if (n === 0) return [];

  k = k % n;

  // Reverse the entire array
  reverse(arr, 0, n - 1);

  // Reverse the first k elements
  reverse(arr, 0, k - 1);

  // Reverse the remaining elements after k
  reverse(arr, k, n - 1);

  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const array = [1, 2, 3, 4, 5];
const k = 3;
console.log(rotateArray(array, k)); // Output: [3, 4, 5, 1, 2]
