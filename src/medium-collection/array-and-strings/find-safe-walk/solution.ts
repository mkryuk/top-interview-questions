export function findSafeWalk(grid: number[][], health: number): boolean {
  const m = grid.length;
  const n = grid[0].length;

  const minDamage: number[][] = Array.from({ length: m }, () => {
    return new Array<number>(n).fill(Infinity);
  });

  const directions: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const queue: number[][] = [];
  let head = 0;
  minDamage[0][0] = grid[0][0];
  queue.push([0, 0]);

  while (head < queue.length) {
    const [row, col] = queue[head];
    head++;
    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextRow >= m || nextCol < 0 || nextCol >= n) {
        continue;
      }
      const nextDamage = minDamage[row][col] + grid[nextRow][nextCol];
      if (nextDamage >= minDamage[nextRow][nextCol]) {
        continue;
      }

      minDamage[nextRow][nextCol] = nextDamage;
      queue.push([nextRow, nextCol]);
    }
  }

  return minDamage[m - 1][n - 1] < health;
}
