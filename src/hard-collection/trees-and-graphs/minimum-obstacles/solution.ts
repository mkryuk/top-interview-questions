import { Heap } from "../../design/heap/heap";

export function minimumObstacles(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const heap = new Heap<[number, number, number]>((a, b) => a[2] - b[2]);
  let distances = Array.from({ length: m }, () => new Array(n).fill(Infinity));
  distances[0][0] = 0;
  heap.push([0, 0, 0]);
  while (heap.size() > 0) {
    const [i, j, distance] = heap.pop()!;
    for (const [di, dj] of moves) {
      const row = i + di;
      const col = j + dj;
      if (row < 0 || row >= m || col < 0 || col >= n) {
        continue;
      }
      const newDistance = distance + grid[row][col];
      if (newDistance < distances[row][col]) {
        distances[row][col] = newDistance;
        heap.push([row, col, distances[row][col]]);
      }
    }
  }
  return distances[m - 1][n - 1];
}
