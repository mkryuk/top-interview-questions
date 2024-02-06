export function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let n = grid.length;
  let numbers = new Array(n * n).fill(0);
  let duplicated = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (numbers[grid[i][j] - 1] !== 0) {
        duplicated = grid[i][j];
      } else {
        numbers[grid[i][j] - 1] = 1;
      }
    }
  }
  const missing = numbers.findIndex((n) => n === 0) + 1;
  return [duplicated, missing];
}
