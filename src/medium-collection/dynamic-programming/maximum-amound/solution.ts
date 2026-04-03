export function maximumAmount(coins: number[][]): number {
  const rows: number = coins.length;
  const cols: number = coins[0].length;
  const negInf: number = Number.NEGATIVE_INFINITY;

  // dp[i][j][k] = max coins at cell (i, j) using exactly k neutralizations
  const dp: number[][][] = createDp(rows, cols, 3, negInf);

  initializeStart(dp, coins[0][0]);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 && j === 0) {
        continue;
      }

      for (let used = 0; used < 3; used++) {
        let bestPrev: number = negInf;

        if (i > 0) {
          bestPrev = Math.max(bestPrev, dp[i - 1][j][used]);
        }

        if (j > 0) {
          bestPrev = Math.max(bestPrev, dp[i][j - 1][used]);
        }

        if (bestPrev !== negInf) {
          dp[i][j][used] = Math.max(dp[i][j][used], bestPrev + coins[i][j]);
        }

        // if current cell has a robber, we may neutralize it
        if (coins[i][j] < 0 && used > 0) {
          let bestPrevNeutralized: number = negInf;

          if (i > 0) {
            bestPrevNeutralized = Math.max(bestPrevNeutralized, dp[i - 1][j][used - 1]);
          }

          if (j > 0) {
            bestPrevNeutralized = Math.max(bestPrevNeutralized, dp[i][j - 1][used - 1]);
          }

          if (bestPrevNeutralized !== negInf) {
            dp[i][j][used] = Math.max(dp[i][j][used], bestPrevNeutralized);
          }
        }
      }
    }
  }

  return Math.max(dp[rows - 1][cols - 1][0], dp[rows - 1][cols - 1][1], dp[rows - 1][cols - 1][2]);
}

function createDp(rows: number, cols: number, states: number, fill: number): number[][][] {
  const dp: number[][][] = [];

  for (let i = 0; i < rows; i++) {
    const row: number[][] = [];

    for (let j = 0; j < cols; j++) {
      const cell: number[] = new Array(states).fill(fill);
      row.push(cell);
    }

    dp.push(row);
  }

  return dp;
}

function initializeStart(dp: number[][][], startValue: number): void {
  // no neutralization used at start
  dp[0][0][0] = startValue;

  // if start is negative, we may neutralize it
  if (startValue < 0) {
    dp[0][0][1] = 0;
  }
}
