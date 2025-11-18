export function kLengthApart(nums: number[], k: number): boolean {
  let prevOneIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    if (prevOneIndex === -1) {
      prevOneIndex = i;
      continue;
    }
    if (i - prevOneIndex - 1 < k) {
      return false;
    }
    prevOneIndex = i;
  }
  return true;
}
