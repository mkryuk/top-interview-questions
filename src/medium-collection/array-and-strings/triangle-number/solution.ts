export function triangleNumber(nums: number[]): number {
  if (nums.length < 3) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let count = 0;

  // fix the largest side at index k
  for (let k = nums.length - 1; k >= 2; k--) {
    // skip zeros early since a triangle cannot have the largest side as 0
    if (nums[k] === 0) {
      continue;
    }

    let i = 0;
    let j = k - 1;

    // two-pointer sweep to count pairs (i, j)
    while (i < j) {
      // if the two smaller sides sum to more than the largest, all indices in [i, j-1] work
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        // otherwise increase the smaller side
        i++;
      }
    }
  }

  return count;
}
