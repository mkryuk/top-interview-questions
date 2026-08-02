export function predictTheWinner(nums: number[]): boolean {
  const n = nums.length;

  const dp: number[][] = Array.from(
    { length: n },

    () => new Array<number>(n).fill(0),
  );

  // current player takes last number
  for (let index = 0; index < n; index++) {
    dp[index][index] = nums[index];
  }

  for (let length = 2; length <= n; length++) {
    for (let left = 0; left + length - 1 < n; left++) {
      const right = left + length - 1;
      const takeLeft = nums[left] - dp[left + 1][right];
      const takeRight = nums[right] - dp[left][right - 1];
      dp[left][right] = Math.max(takeLeft, takeRight);
    }
  }

  return dp[0][n - 1] >= 0;
}
