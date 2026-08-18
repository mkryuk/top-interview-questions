export function stoneGameV(stoneValue: number[]): number {
  const n = stoneValue.length;
  // prefix[i] is the sum of stoneValue[0..i-1]
  const prefix: number[] = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + stoneValue[i];
  }

  // dp[left][right] is the best score for this interval
  const dp: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));

  // build intervals from shorter to longer
  for (let length = 2; length <= n; length++) {
    for (let left = 0; left + length <= n; left++) {
      const right = left + length - 1;

      let best = 0;
      for (let split = left; split < right; split++) {
        const leftSum = getSum(prefix, left, split);
        const rightSum = getSum(prefix, split + 1, right);
        if (leftSum < rightSum) {
          best = Math.max(best, leftSum + dp[left][split]);
        } else if (leftSum > rightSum) {
          best = Math.max(best, rightSum + dp[split + 1][right]);
        } else {
          best = Math.max(best, leftSum + Math.max(dp[left][split], dp[split + 1][right]));
        }
      }
      dp[left][right] = best;
    }
  }

  return dp[0][n - 1];
}

function getSum(prefix: number[], left: number, right: number): number {
  return prefix[right + 1] - prefix[left];
}
