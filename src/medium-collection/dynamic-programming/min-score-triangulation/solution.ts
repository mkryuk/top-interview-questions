export function minScoreTriangulation(values: number[]): number {
  const n: number = values.length;
  const memo: number[][] = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => {
      return -1;
    });
  });

  return dfs(0, n - 1, values, memo);
}

function dfs(i: number, j: number, values: number[], memo: number[][]): number {
  // if fewer than 3 vertices, no triangle possible
  if (j - i < 2) {
    return 0;
  }

  if (memo[i][j] !== -1) {
    return memo[i][j];
  }

  let best: number = Number.POSITIVE_INFINITY;

  // try all possible splits
  for (let k = i + 1; k < j; k++) {
    const score: number = dfs(i, k, values, memo) + dfs(k, j, values, memo) + values[i] * values[j] * values[k];

    if (score < best) {
      best = score;
    }
  }

  memo[i][j] = best;
  return best;
}
