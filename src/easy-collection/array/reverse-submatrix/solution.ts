export function reverseSubmatrix(grid: number[][], x: number, y: number, k: number): number[][] {
  for (let offset = 0; offset < Math.floor(k / 2); offset++) {
    const topRow = x + offset;
    const bottomRow = x + k - 1 - offset;

    for (let column = y; column < y + k; column++) {
      const temp = grid[topRow][column];
      grid[topRow][column] = grid[bottomRow][column];
      grid[bottomRow][column] = temp;
    }
  }

  return grid;
}
