export function countSubmatrices(grid: number[][], k: number): number {
  const rows: number = grid.length;
  const cols: number = grid[0].length;
  const prefix: number[][] = buildPrefixSum(grid, rows, cols);

  let count: number = 0;
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      const sum: number = prefix[r][c];
      if (sum <= k) {
        count++;
      }
    }
  }

  return count;
}

function buildPrefixSum(grid: number[][], rows: number, cols: number): number[][] {
  const prefix: number[][] = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      prefix[r][c] = grid[r - 1][c - 1] + prefix[r - 1][c] + prefix[r][c - 1] - prefix[r - 1][c - 1];
    }
  }

  return prefix;
}
