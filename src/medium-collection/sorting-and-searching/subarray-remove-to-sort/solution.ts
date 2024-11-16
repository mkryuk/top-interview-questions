export function findLengthOfShortestSubarray(arr: number[]): number {
  const n = arr.length;
  let left = 0;
  while (left + 1 < n && arr[left] <= arr[left + 1]) {
    left++;
  }

  // the entire array is sorted
  if (left === n - 1) {
    return 0;
  }

  let right = n - 1;
  while (right > 0 && arr[right] >= arr[right - 1]) {
    right--;
  }

  let i = 0;
  let j = right;
  let result = Math.min(n - left - 1, right);
  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return result;
}
