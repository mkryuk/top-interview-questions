export function closedIsland(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  let result = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== 0) {
        continue;
      }

      if (isClosedIsland(grid, row, col)) {
        result++;
      }
    }
  }

  return result;
}

function isClosedIsland(grid: number[][], row: number, col: number): boolean {
  const rows = grid.length;
  const cols = grid[0].length;

  // outside the grid means this island reaches the boundary
  if (row < 0 || row >= rows || col < 0 || col >= cols) {
    return false;
  }

  // water or already visited land cannot make the island open
  if (grid[row][col] !== 0) {
    return true;
  }

  // mark land as visited
  grid[row][col] = 1;
  const up = isClosedIsland(grid, row - 1, col);
  const down = isClosedIsland(grid, row + 1, col);
  const left = isClosedIsland(grid, row, col - 1);
  const right = isClosedIsland(grid, row, col + 1);

  return up && down && left && right;
}
