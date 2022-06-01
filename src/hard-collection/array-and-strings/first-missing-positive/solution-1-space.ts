export function firstMissingPositive(nums: number[]): number {
  let onePresent = false;
  let n = nums.length;
  // check if 1 is in the array
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      onePresent = true;
      break;
    }
  }
  // we are done if 1 is not in the array
  if (!onePresent) {
    return 1;
  }
  // set all negatives, zero and numbers that are > n to 1
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = 1;
    }
  }
  // use index as a hash key and number sign as a presence flag
  // for example, if nums[1] is negative that means that number `1`
  // is present in the array.
  // if nums[2] is positive - number 2 is missing.
  for (let i = 0; i < n; i++) {
    let nIdx = Math.abs(nums[i]);

    // we use 0 index to mark nth number
    if (nIdx === n) {
      nums[0] = -Math.abs(nums[0]);
    } else {
      nums[nIdx] = -Math.abs(nums[nIdx]);
    }
  }
  // the first positive index will be missed number
  for (let i = 1; i < n; i++) {
    if (nums[i] > 0) {
      return i;
    }
  }
  // check if nth number is the answer
  if (nums[0] > 0) {
    return n;
  }
  // otherwise the missed number is n + 1
  return n + 1;
}
