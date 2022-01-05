export function increasingTriplet(nums: number[]): boolean {
  for (let i = 0, j = 1, jt = 1, k = 2; k < nums.length; ) {
    if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]) {
      return true;
    }
    if (nums[i] >= nums[j]) {
      i = j;
      j++;
      jt = j;
      k++;
    } else if (nums[jt] > nums[k] && nums[k] > nums[i]) {
      j = k;
      jt = j;
      k++;
    } else if (nums[jt] < nums[i] && nums[k] < nums[j]) {
      i = jt;
      j = k;
      jt = j;
      k++;
    } else {
      jt++;
      k++;
    }
  }
  return false;
}
