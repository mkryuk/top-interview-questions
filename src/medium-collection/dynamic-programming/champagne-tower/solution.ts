export function champagneTower(poured: number, query_row: number, query_glass: number): number {
  // dp[c] stores how much champagne reaches glass c in the current row.
  let dp = new Array<number>(1).fill(poured);

  for (let row = 0; row < query_row; row++) {
    const next = new Array<number>(row + 2).fill(0);

    for (let glass = 0; glass <= row; glass++) {
      // only the overflow above 1 cup spills down to the next row.
      const overflow = (dp[glass] - 1) / 2;
      if (overflow > 0) {
        next[glass] += overflow;
        next[glass + 1] += overflow;
      }
    }

    dp = next;
  }

  // a glass cannot contain more than 1 cup.
  return Math.min(1, dp[query_glass]);
}
