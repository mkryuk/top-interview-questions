export function wiggleSort(nums: number[]): void {
  let sorted = [...nums.sort((a, b) => a - b)];
  const mid = Math.trunc((nums.length - 1) / 2);
  for (let i = 0, li = mid; i < sorted.length; i += 2) {
    nums[i] = sorted[li--];
  }
  for (let i = 1, hi = sorted.length - 1; i < sorted.length; i += 2) {
    nums[i] = sorted[hi--];
  }
}
