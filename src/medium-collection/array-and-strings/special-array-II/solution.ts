export function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const n = nums.length;
  const sameParity = new Array(n - 1).fill(0);
  for (let i = 0; i < n; i++) {
    // if both are even or both are odd, mark 1
    if (nums[i] % 2 === nums[i + 1] % 2) {
      sameParity[i] = 1;
    }
  }

  const prefixSum = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + sameParity[i - 1];
  }

  return queries.map(([from, to]) => (from === to ? true : prefixSum[from] - prefixSum[to] === 0));
}
