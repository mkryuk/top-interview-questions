export function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => new Array(maxMove + 1).fill(-1)));
  return countPaths(startRow, startColumn, m, n, maxMove, dp);
}

function countPaths(x: number, y: number, m: number, n: number, move: number, dp: number[][][]): number {
  if (x < 0 || y < 0 || x >= m || y >= n) {
    return 1;
  }
  if (move === 0) {
    return 0;
  }
  const MOD = 1e9 + 7;
  let result = 0;
  if (dp[x][y][move] !== -1) {
    return dp[x][y][move];
  }
  result = (result + countPaths(x - 1, y, m, n, move - 1, dp)) % MOD;
  result = (result + countPaths(x + 1, y, m, n, move - 1, dp)) % MOD;
  result = (result + countPaths(x, y - 1, m, n, move - 1, dp)) % MOD;
  result = (result + countPaths(x, y + 1, m, n, move - 1, dp)) % MOD;

  dp[x][y][move] = result;
  return result;
}
