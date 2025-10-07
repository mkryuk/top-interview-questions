import { Heap } from "../../design/heap/heap";

export function swimInWater(grid: number[][]): number {
  const n: number = grid.length;

  // directions for up, down, left, right
  const dirs: number[][] = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // distance matrix stores minimal possible time to reach each cell
  const dist: number[][] = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => {
      return Number.POSITIVE_INFINITY;
    });
  });

  // heap ordered by smallest time first
  const heap = new Heap<[number, number, number]>((a, b) => {
    return a[0] - b[0];
  });

  // start at top-left
  dist[0][0] = grid[0][0];
  heap.push([grid[0][0], 0, 0]);

  while (!heap.isEmpty()) {
    const current = heap.pop();
    if (!current) {
      continue;
    }

    const [t, r, c] = current;

    // skip outdated entries
    if (t !== dist[r][c]) {
      continue;
    }

    // reached bottom-right, minimal possible time found
    if (r === n - 1 && c === n - 1) {
      return t;
    }

    // explore neighbors
    for (const [dr, dc] of dirs) {
      const nr: number = r + dr;
      const nc: number = c + dc;

      if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
        const nt: number = Math.max(t, grid[nr][nc]);
        if (nt < dist[nr][nc]) {
          dist[nr][nc] = nt;
          heap.push([nt, nr, nc]);
        }
      }
    }
  }

  // unreachable, but per constraints should never happen
  return -1;
}
