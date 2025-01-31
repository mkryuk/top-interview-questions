export function largestIsland(grid: number[][]): number {
  const islandSizes = new Map<number, number>();
  const n = grid.length;
  let islandId = 2;
  let result = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 1) {
        // get island size and set all island cells to islandId
        const size = getIslandSize(row, col, islandId, grid);
        islandSizes.set(islandId, size);
        islandId++;
        result = Math.max(result, size);
      }
    }
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === 0) {
        let islandSize = 1;
        const visited = new Set<number>();
        for (const [dr, dc] of directions) {
          const newRow = row + dr;
          const newCol = col + dc;
          if (
            newRow >= 0 &&
            newRow < n &&
            newCol >= 0 &&
            newCol < n &&
            grid[newRow][newCol] !== 0 &&
            !visited.has(grid[newRow][newCol])
          ) {
            islandSize += islandSizes.get(grid[newRow][newCol])!;
            visited.add(grid[newRow][newCol]);
          }
        }
        result = Math.max(result, islandSize);
      }
    }
  }

  return result;
}

function getIslandSize(row: number, col: number, islandId: number, grid: number[][]): number {
  const n = grid.length;
  if (row < 0 || col < 0 || row >= n || col >= n || grid[row][col] !== 1) {
    return 0;
  }
  grid[row][col] = islandId;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let size = 1;
  for (const [dr, dc] of directions) {
    size += getIslandSize(row + dr, col + dc, islandId, grid);
  }
  return size;
}
