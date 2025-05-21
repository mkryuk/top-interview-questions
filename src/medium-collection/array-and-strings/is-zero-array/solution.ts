export function isZeroArray(nums: number[], queries: number[][]): boolean {
  const n = nums.length;
  const diff = new Array(n + 1).fill(0);
  for (const [l, r] of queries) {
    diff[l]++;
    diff[r + 1]--;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += diff[i];
    if (count < nums[i]) {
      return false;
    }
  }
  return true;
}
