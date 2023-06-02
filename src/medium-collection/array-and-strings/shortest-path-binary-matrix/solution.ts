export function shortestPathBinaryMatrix(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) {
    return -1; // If start or end is blocked, return -1
  }

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const queue: [number, number, number][] = [];
  queue.push([0, 0, 1]); // Initialize the queue with the start position and steps

  while (queue.length > 0) {
    const [x, y, step] = queue.shift()!;
    if (x === n - 1 && y === n - 1) {
      return step; // If the end is reached, return the steps
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < n &&
        newY < n &&
        grid[newX][newY] === 0
      ) {
        queue.push([newX, newY, step + 1]);
        grid[newX][newY] = 1; // Mark the position as visited
      }
    }
  }

  return -1; // If the queue is empty and the end is not reached, return -1
}
