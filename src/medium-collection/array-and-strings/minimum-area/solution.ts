export function minimumArea(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0].length;

  // track the bounding box of all ones
  let minRow: number = Number.POSITIVE_INFINITY;
  let maxRow: number = Number.NEGATIVE_INFINITY;
  let minCol: number = Number.POSITIVE_INFINITY;
  let maxCol: number = Number.NEGATIVE_INFINITY;

  // scan the grid and update bounds
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        if (r < minRow) {
          minRow = r;
        }
        if (r > maxRow) {
          maxRow = r;
        }
        if (c < minCol) {
          minCol = c;
        }
        if (c > maxCol) {
          maxCol = c;
        }
      }
    }
  }

  const height: number = maxRow - minRow + 1;
  const width: number = maxCol - minCol + 1;

  return height * width;
}
