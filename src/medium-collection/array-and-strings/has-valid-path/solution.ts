export function hasValidPath(grid: number[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const directionsByStreet: Record<number, number[][]> = {
    1: [
      [0, -1],

      [0, 1],
    ],

    2: [
      [-1, 0],

      [1, 0],
    ],

    3: [
      [0, -1],

      [1, 0],
    ],

    4: [
      [0, 1],

      [1, 0],
    ],

    5: [
      [0, -1],

      [-1, 0],
    ],

    6: [
      [0, 1],

      [-1, 0],
    ],
  };

  const visited: boolean[][] = Array.from({ length: rows }, () => {
    return Array(cols).fill(false);
  });

  const queue: number[][] = [[0, 0]];
  visited[0][0] = true;

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;

    if (row === rows - 1 && col === cols - 1) {
      return true;
    }
    const street = grid[row][col];
    const directions = directionsByStreet[street];

    for (const [rowDelta, colDelta] of directions) {
      const nextRow = row + rowDelta;
      const nextCol = col + colDelta;

      if (!isInsideGrid(nextRow, nextCol, rows, cols)) {
        continue;
      }

      if (visited[nextRow][nextCol]) {
        continue;
      }

      if (!canMoveBack(grid, directionsByStreet, nextRow, nextCol, rowDelta, colDelta)) {
        continue;
      }

      visited[nextRow][nextCol] = true;

      queue.push([nextRow, nextCol]);
    }
  }

  return false;
}

function isInsideGrid(row: number, col: number, rows: number, cols: number): boolean {
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

function canMoveBack(
  grid: number[][],
  directionsByStreet: Record<number, number[][]>,
  nextRow: number,
  nextCol: number,
  rowDelta: number,
  colDelta: number,
): boolean {
  const nextStreet = grid[nextRow][nextCol];

  // neighbor must have the opposite direction
  const requiredRowDelta = -rowDelta;
  const requiredColDelta = -colDelta;

  for (const [nextRowDelta, nextColDelta] of directionsByStreet[nextStreet]) {
    if (nextRowDelta === requiredRowDelta && nextColDelta === requiredColDelta) {
      return true;
    }
  }

  return false;
}
