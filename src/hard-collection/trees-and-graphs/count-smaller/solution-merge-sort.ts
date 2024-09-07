export function countSmaller(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(0);
  const indices = new Array(n); // record the index. we are going to sort this array
  for (let i = 0; i < n; i++) {
    indices[i] = i;
  }
  // sort indices with their corresponding values in nums, i.e., nums[indices[i]]
  mergeSort(indices, 0, n, result, nums);

  return result;
}

function mergeSort(indices: number[], start: number, end: number, result: number[], nums: number[]) {
  if (end - start <= 1) {
    return;
  }
  const mid = Math.trunc((start + end) / 2);
  mergeSort(indices, start, mid, result, nums);
  mergeSort(indices, mid, end, result, nums);
  merge(indices, start, mid, end, result, nums);
}

function merge(indices: number[], start: number, mid: number, end: number, result: number[], nums: number[]) {
  // merge [start, mid) and [mid, end)
  let i = start; // current index for the left array
  let j = mid; // current index for the right array
  // use temp to temporarily store sorted array
  const temp = [];
  while (i < mid && j < end) {
    if (nums[indices[i]] <= nums[indices[j]]) {
      // j - mid numbers jump to the left side of indices[i]
      result[indices[i]] += j - mid;
      temp.push(indices[i]);
      i++;
    } else {
      temp.push(indices[j]);
      j++;
    }
  }
  // if there are still elements left in nums[indices[i]], push them to temp
  while (i < mid) {
    // j - mid numbers jump to the left side of indices[i]
    result[indices[i]] += j - mid;
    temp.push(indices[i]);
    i++;
  }
  while (j < end) {
    temp.push(indices[j]);
    j++;
  }
  // restore from temp to indices
  for (let k = start; k < end; k++) {
    indices[k] = temp[k - start];
  }
}
