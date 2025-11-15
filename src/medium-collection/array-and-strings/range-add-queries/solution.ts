export function rangeAddQueries(n: number, queries: number[][]): number[][] {
  // initialize (n+1) x (n+1) diff matrix
  const diff: number[][] = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (const [r1, c1, r2, c2] of queries) {
    // add to top-left
    diff[r1][c1] += 1;

    // subtract below bottom-left
    if (r2 + 1 <= n) {
      diff[r2 + 1][c1] -= 1;
    }

    // subtract right of top-right
    if (c2 + 1 <= n) {
      diff[r1][c2 + 1] -= 1;
    }

    // add bottom-right diagonal
    if (r2 + 1 <= n && c2 + 1 <= n) {
      diff[r2 + 1][c2 + 1] += 1;
    }
  }

  // prefix sum horizontally
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      diff[i][j] += diff[i][j - 1];
    }
  }

  // prefix sum vertically
  for (let j = 0; j <= n; j++) {
    for (let i = 1; i <= n; i++) {
      diff[i][j] += diff[i - 1][j];
    }
  }

  // build final result n x n
  const result: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = diff[i][j];
    }
  }

  return result;
}
