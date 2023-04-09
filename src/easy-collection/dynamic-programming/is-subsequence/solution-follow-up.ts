// Binary search function to find the smallest index greater than the target in the array
function binarySearch(array: number[], target: number): number {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// Optimized function to check if string s is a subsequence of string t
export function isSubsequence(s: string, t: string): boolean {
  // Create a dictionary to store the indices of each character in string t
  const charIndices: { [key: string]: number[] } = {};

  // Populate the dictionary with indices for each character in t
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!charIndices[char]) {
      charIndices[char] = [];
    }
    charIndices[char].push(i);
  }

  let prevIndex = -1;
  // Iterate through each character in string s
  for (const char of s) {
    // If the character doesn't exist in t, it's not a subsequence
    if (!charIndices[char]) {
      return false;
    }

    // Use binary search to find the smallest index greater than prevIndex
    const index = binarySearch(charIndices[char], prevIndex);

    // If the index is out of bounds, it's not a subsequence
    if (index === charIndices[char].length) {
      return false;
    }

    // Set the prevIndex for the next character search
    prevIndex = charIndices[char][index];
  }

  // If we've reached the end of string s, it's a subsequence of t
  return true;
}
