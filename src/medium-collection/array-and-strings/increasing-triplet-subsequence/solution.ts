export function increasingTriplet(nums: number[]): boolean {
  for (let i = 0, j = 1, jt = 1, k = 2; k < nums.length; ) {
    // if we found the result return it
    if (i < j && j < k && nums[i] < nums[j] && nums[j] < nums[k]) {
      return true;
    }
    // find the first tuple that increasing
    if (nums[i] >= nums[j]) {
      i = j;
      j++;
      jt = j;
      k++;
    } else if (nums[jt] > nums[k] && nums[k] > nums[i]) {
      // move down the second number
      // of the first tuple if possible
      j = k;
      jt = j;
      k++;
    } else if (nums[jt] <= nums[i] && nums[k] < nums[j]) {
      // if we found the case when
      // the next increasing tuple
      // is lower than the first one
      // move the first tuple to this one
      i = jt;
      j = k;
      jt = j;
      k++;
    } else {
      // otherwise just move second tuple
      jt++;
      k++;
    }
  }
  return false;
}
