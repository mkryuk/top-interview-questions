import { Heap } from "../../design/heap/heap";

export function maxPoints(grid: number[][], queries: number[]): number[] {
  const m = grid.length;
  const n = grid[0].length;

  const sortedQueries = queries.map((v, i) => [v, i]);
  sortedQueries.sort((a, b) => a[0] - b[0]);

  const heap = new Heap<[number, number, number]>((a, b) => a[0] - b[0]);
  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  visited[0][0] = true;
  heap.push([grid[0][0], 0, 0]);

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const result = new Array(queries.length);
  let steps = 0;
  for (const [q, i] of sortedQueries) {
    while (!heap.isEmpty() && heap.top()![0] < q) {
      const [val, r, c] = heap.pop()!;
      steps++;
      for (const [dr, dc] of directions) {
        const [nr, nc] = [dr + r, dc + c];
        if (nr >= 0 && nc >= 0 && nr < m && nc < n && !visited[nr][nc]) {
          visited[nr][nc] = true;
          heap.push([grid[nr][nc], nr, nc]);
        }
      }
    }
    result[i] = steps;
  }
  return result;
}
