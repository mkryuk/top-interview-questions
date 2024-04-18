export function islandPerimeter(grid: number[][]): number {
  let result = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        result += 4;
        // Check for adjacent land cells and subtract shared edges
        if (i > 0 && grid[i - 1][j] === 1) {
          result -= 2;
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          result -= 2;
        }
      }
    }
  }
  return result;
}
