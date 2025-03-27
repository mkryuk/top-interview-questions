export function minimumIndex(nums: number[]): number {
  const n = nums.length;
  let dominantNumber = -1;
  let count = 0;
  // find dominant element
  for (const num of nums) {
    if (count === 0) {
      dominantNumber = num;
      count = 1;
      continue;
    }
    if (dominantNumber === num) {
      count++;
    } else {
      count--;
    }
  }

  // if count < 2, dominant isn't frequent enough to be dominant in both subarrays
  if (count < 2) {
    return -1;
  }

  let totalCount = 0;
  for (const num of nums) {
    if (num === dominantNumber) {
      totalCount++;
    }
  }

  let leftCount = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === dominantNumber) {
      leftCount++;
    }
    const rightCount = totalCount - leftCount;
    const leftLength = i + 1;
    const rightLength = n - leftLength;
    // dominant must appear more than half
    if (leftLength < leftCount * 2 && rightLength < rightCount * 2) {
      return i;
    }
  }

  return -1;
}
