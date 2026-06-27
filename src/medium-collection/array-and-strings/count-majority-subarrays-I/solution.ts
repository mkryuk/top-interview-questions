export function countMajoritySubarrays(nums: number[], target: number): number {
  const n = nums.length;
  let result = 0;
  for (let left = 0; left < n; left++) {
    let balance = 0;
    for (let right = left; right < n; right++) {
      if (nums[right] === target) {
        balance += 1;
      } else {
        balance -= 1;
      }

      if (balance > 0) {
        result += 1;
      }
    }
  }
  return result;
}
