export function uniquePaths(grid: number[][]): number {
  const MOD = 1e9 + 7;

  const rows = grid.length;
  const cols = grid[0].length;

  const right: number[][] = Array.from({ length: rows }, () => new Array<number>(cols).fill(0));

  const down: number[][] = Array.from({ length: rows }, () => new Array<number>(cols).fill(0));

  // the starting cell has no incoming direction.
  // seed its two possible outgoing moves directly.
  if (cols > 1) {
    right[0][1] = 1;
  }

  if (rows > 1) {
    down[1][0] = 1;
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (row === 0 && col === 0) {
        continue;
      }

      const fromLeft = right[row][col];
      const fromTop = down[row][col];

      if (grid[row][col] === 1) {
        // entering a mirror from the left turns the robot down.
        if (row + 1 < rows) {
          down[row + 1][col] = (down[row + 1][col] + fromLeft) % MOD;
        }

        // entering a mirror from above turns the robot right.
        if (col + 1 < cols) {
          right[row][col + 1] = (right[row][col + 1] + fromTop) % MOD;
        }

        continue;
      }

      const paths = (fromLeft + fromTop) % MOD;

      // at an empty cell, either direction can be chosen.
      if (col + 1 < cols) {
        right[row][col + 1] = (right[row][col + 1] + paths) % MOD;
      }

      if (row + 1 < rows) {
        down[row + 1][col] = (down[row + 1][col] + paths) % MOD;
      }
    }
  }

  return (right[rows - 1][cols - 1] + down[rows - 1][cols - 1]) % MOD;
}
