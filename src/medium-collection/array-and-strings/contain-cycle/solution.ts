export function containsCycle(grid: string[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
  const directions: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!visited[row][col]) {
        if (hasCycle(grid, visited, row, col, -1, -1, directions)) {
          return true;
        }
      }
    }
  }

  return false;
}

function hasCycle(
  grid: string[][],
  visited: boolean[][],
  row: number,
  col: number,
  parentRow: number,
  parentCol: number,
  directions: number[][],
): boolean {
  visited[row][col] = true;

  for (const [rowDiff, colDiff] of directions) {
    const nextRow = row + rowDiff;
    const nextCol = col + colDiff;

    if (!isInsideGrid(grid, nextRow, nextCol)) {
      continue;
    }

    if (grid[nextRow][nextCol] !== grid[row][col]) {
      continue;
    }

    // do not go directly back to the previous cell
    if (nextRow === parentRow && nextCol === parentCol) {
      continue;
    }

    // visited same-character neighbor that is not parent means cycle
    if (visited[nextRow][nextCol]) {
      return true;
    }

    if (hasCycle(grid, visited, nextRow, nextCol, row, col, directions)) {
      return true;
    }
  }

  return false;
}

function isInsideGrid(grid: string[][], row: number, col: number): boolean {
  return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}
