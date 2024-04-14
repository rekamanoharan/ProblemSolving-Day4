// 3.Write a function to remove duplicates from an array.

function removeDuplicates(arr) {
  const hashMap = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!hashMap[arr[i]]) {
      // If the element is not in the hashMap
      result.push(arr[i]); // Add it to the result array
      hashMap[arr[i]] = true; // Mark it as seen in the hashMap
    }
  }

  return result;
}

const array = [1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7];
console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5, 6, 7]
