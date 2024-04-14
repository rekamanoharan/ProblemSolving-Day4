//2.Write a function to find the common elements between two arrays.

function findCommonElements(arr1, arr2) {
  const commonElements = [];
  const hashMap = {};

  // Populate the hashMap with elements from arr1
  for (let i = 0; i < arr1.length; i++) {
    hashMap[arr1[i]] = true;
  }

  // Iterate through arr2 and check if each element exists in the hashMap
  for (let j = 0; j < arr2.length; j++) {
    if (hashMap[arr2[j]]) {
      commonElements.push(arr2[j]);
      // Remove the element from hashMap to avoid duplicates
      delete hashMap[arr2[j]];
    }
  }

  return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2)); // Output: [3, 4, 5]
