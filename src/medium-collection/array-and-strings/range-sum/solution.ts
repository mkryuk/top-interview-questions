export function rangeSum(
  nums: number[],
  n: number,
  left: number,
  right: number,
): number {
  const MOD = 1e9 + 7;
  let subarraySums: number[] = [];

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      subarraySums.push(sum);
    }
  }
  subarraySums.sort((a, b) => a - b);
  let result = 0;
  for (let i = left - 1; i < right; i++) {
    result = (result + subarraySums[i]) % MOD;
  }

  return result;
}
