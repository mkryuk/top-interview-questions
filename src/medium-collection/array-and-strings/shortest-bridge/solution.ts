type Coordinate = [number, number];

export function shortestBridge(grid: number[][]): number {
  let n = grid.length;
  let queue: Coordinate[] = []; // Queue to hold coordinates
  let found = false;

  // DFS to find an island, marking its positions
  for (let i = 0; i < n && !found; i++) {
    for (let j = 0; j < n && !found; j++) {
      if (grid[i][j] == 1) {
        // If we find a 1, start DFS
        dfs(grid, i, j, queue); // Perform DFS from this point
        found = true; // Mark that we've found the first island
      }
    }
  }

  let steps = 0; // Number of steps required to reach the second island
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]; // Possible directions to move

  // BFS to expand this island
  while (queue.length > 0) {
    // While there are elements in the queue
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      // Go through each element in the queue
      let [x, y] = queue.shift()!; // Remove and retrieve the first element of the queue
      for (let [dx, dy] of directions) {
        // Go through each possible direction
        let nx = x + dx;
        let ny = y + dy; // Determine the new point
        if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
          // If the new point is within the grid
          if (grid[nx][ny] == 1) {
            return steps; // If we've reached the second island, return steps
          } else if (grid[nx][ny] == 0) {
            // If we've found water
            grid[nx][ny] = 2; // Mark the water as visited
            queue.push([nx, ny]); // Add the coordinate to the queue
          }
        }
      }
    }
    steps++; // Increment the number of steps
  }

  return -1; // If no solution is found, return -1
}

// DFS function to mark all cells of the first island
function dfs(grid: number[][], i: number, j: number, queue: Coordinate[]) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid.length || grid[i][j] != 1) return; // Boundary and condition check

  grid[i][j] = 2; // Mark this cell as visited
  queue.push([i, j]); // Add this cell to the queue

  // Visit all adjacent cells
  dfs(grid, i - 1, j, queue);
  dfs(grid, i + 1, j, queue);
  dfs(grid, i, j - 1, queue);
  dfs(grid, i, j + 1, queue);
}
