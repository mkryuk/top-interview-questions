export function countIslands(grid: number[][], k: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let result = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        continue;
      }

      const sum = getIslandSum(grid, row, col);

      if (sum % k === 0) {
        result++;
      }
    }
  }

  return result;
}

function getIslandSum(grid: number[][], startRow: number, startCol: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const DIRECTIONS: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const stack: [number, number][] = [[startRow, startCol]];
  let sum = grid[startRow][startCol];

  // mark the starting cell as visited
  grid[startRow][startCol] = 0;
  while (stack.length > 0) {
    const [row, col] = stack.pop()!;

    for (const [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || grid[newRow][newCol] === 0) {
        continue;
      }

      sum += grid[newRow][newCol];

      // mark as visited before adding to the stack
      grid[newRow][newCol] = 0;
      stack.push([newRow, newCol]);
    }
  }

  return sum;
}
