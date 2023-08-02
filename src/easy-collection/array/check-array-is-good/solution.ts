export function isGood(nums: number[]): boolean {
  let map = new Array(nums.length).fill(0);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (
      map[nums[i]] === 0 ||
      (nums[i] === nums.length - 1 && map[nums[i]] < 2)
    ) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      return false;
    }
  }
  return map[nums.length - 1] === 2;
}
