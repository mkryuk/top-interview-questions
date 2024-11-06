export function canSortArray(nums: number[]): boolean {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentMin = nums[i];
    let currentMax = nums[i];
    let counter = counterBits(nums[i]);
    // pass through the whole group with the same bit count
    while (i < nums.length - 1 && counterBits(nums[i + 1]) === counter) {
      currentMin = Math.min(currentMin, nums[i + 1]);
      currentMax = Math.max(currentMax, nums[i + 1]);
      i++;
    }
    // if the group's min less than prev group max
    // we unable to sort the array
    if (currentMin < max) {
      return false;
    }
    max = currentMax;
  }
  return true;
}

function counterBits(num: number): number {
  let counter = 0;
  while (num > 0) {
    counter += num & 1;
    num >>>= 1;
  }
  return counter;
}
