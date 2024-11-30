import { Heap } from "../../design/heap/heap";

export function minimumTime(grid: number[][]): number {
  const n = grid[0].length;
  const m = grid.length;
  const visited = Array.from({ length: m }, () => new Array<boolean>(n).fill(false));
  const heap = new Heap<[number, number, number]>((a, b) => a[2] - b[2]);
  heap.push([0, 0, 0]);
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // if it's impossible to move from the starting cell
  if (m > 1 && grid[1][0] > 1 && n > 1 && grid[0][1] > 1) {
    return -1;
  }

  while (heap.size() > 0) {
    let [x, y, time] = heap.pop()!;
    if (visited[x][y]) {
      continue;
    }
    visited[x][y] = true;
    if (x === m - 1 && y === n - 1) {
      return time;
    }
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= m || ny >= n || visited[nx][ny]) {
        continue;
      }
      let arrivalTime = time + 1;
      if (arrivalTime < grid[nx][ny]) {
        let wait = grid[nx][ny] - arrivalTime;
        if (wait % 2 !== 0) {
          wait += 1;
        }
        arrivalTime += wait;
      }
      heap.push([nx, ny, arrivalTime]);
    }
  }

  return -1;
}
