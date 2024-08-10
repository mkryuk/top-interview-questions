export function numMagicSquaresInside(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;
  for (let col = 0; col <= rows - 3; col++) {
    for (let row = 0; row <= cols - 3; row++) {
      if (isMagic(col, row, grid)) {
        result++;
      }
    }
  }
  return result;
}

function isMagic(i: number, j: number, grid: number[][]): boolean {
  const uniqueValues = new Set<number>();
  for (let col = i; col < i + 3; col++) {
    for (let row = j; row < j + 3; row++) {
      if (
        grid[col][row] < 0 ||
        grid[col][row] > 9 ||
        uniqueValues.has(grid[col][row])
      ) {
        return false;
      }
      uniqueValues.add(grid[i][j]);
    }
  }

  // Check rows, columns, and diagonals
  const s1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
  const s2 = grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2];
  const s3 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
  const s4 = grid[i][j] + grid[i + 1][j] + grid[i + 2][j];
  const s5 = grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1];
  const s6 = grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2];
  const s7 = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
  const s8 = grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j];

  return (
    s1 === 15 &&
    s2 === 15 &&
    s3 === 15 &&
    s4 === 15 &&
    s5 === 15 &&
    s6 === 15 &&
    s7 === 15 &&
    s8 === 15
  );
}
