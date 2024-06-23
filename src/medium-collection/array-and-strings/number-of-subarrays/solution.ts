export function numberOfSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  prefix[0] = 1;

  let countOdd = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 1) {
      countOdd++;
    }
    if (countOdd >= k) {
      result += prefix[countOdd - k];
    }
    prefix[countOdd]++;
  }

  return result;
}
