export function check(nums: number[]): boolean {
  let sorted = [...nums].sort((a, b) => a - b);
  const n = nums.length;
  for (let x = 0; x < nums.length; x++) {
    let i = 0;
    while (i < n && nums[i] === sorted[(i + x) % n]) {
      i++;
    }
    if (i === n) {
      return true;
    }
  }
  return false;
}
