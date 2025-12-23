export function minDeletionSize(strs: string[]): number {
  const length: number = strs[0].length;

  // dp[j] = longest valid kept subsequence ending at column j
  const dp: number[] = new Array<number>(length).fill(1);
  let best: number = 1;

  for (let j: number = 0; j < length; j++) {
    for (let i: number = 0; i < j; i++) {
      if (canFollow(strs, i, j)) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
    best = Math.max(best, dp[j]);
  }

  return length - best;
}

function canFollow(strs: string[], i: number, j: number): boolean {
  const n: number = strs.length;

  for (let r: number = 0; r < n; r++) {
    if (strs[r][i] > strs[r][j]) {
      return false;
    }
  }
  return true;
}
