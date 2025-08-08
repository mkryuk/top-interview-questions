export function maxCollectedFruits(fruits: number[][]): number {
  const n = fruits.length;
  if (n === 0) {
    return 0;
  }

  // sum of main diagonal
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += fruits[i][i];
  }

  ans += runDP(fruits);
  transpose(fruits);
  ans += runDP(fruits);

  return ans;
}

function runDP(M: number[][]): number {
  const n = M.length;
  const NEG = Number.MIN_SAFE_INTEGER;

  // two reusable arrays for rolling DP
  let prev = new Array<number>(n).fill(NEG);
  let curr = new Array<number>(n).fill(NEG);

  // set starting position
  prev[n - 1] = M[0][n - 1];

  for (let i = 1; i < n - 1; i++) {
    // iterate only over reachable positions
    for (let j = Math.max(n - 1 - i, i + 1); j < n; j++) {
      let best = prev[j];
      if (j > 0) {
        best = Math.max(best, prev[j - 1]);
      }
      if (j + 1 < n) {
        best = Math.max(best, prev[j + 1]);
      }
      curr[j] = best + M[i][j];
    }
    // swap buffers
    [prev, curr] = [curr, prev];
  }
  return prev[n - 1];
}

function transpose(M: number[][]): void {
  const n = M.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      [M[i][j], M[j][i]] = [M[j][i], M[i][j]];
    }
  }
}
