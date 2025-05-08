import { Heap } from "../../../hard-collection/design/heap/heap";

export function minTimeToReach(moveTime: number[][]): number {
  const rows = moveTime.length;
  const cols = moveTime[0].length;
  const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  dist[0][0] = 0;
  // heap [row, col, time];
  const heap = new Heap<[number, number, number]>((a, b) => a[2] - b[2]);
  heap.push([0, 0, 0]);
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (!heap.isEmpty()) {
    const [row, col, time] = heap.pop()!;
    if (time > dist[row][col]) {
      continue;
    }
    if (row === rows - 1 && col === cols - 1) {
      return time;
    }
    for (const [dr, dc] of dirs) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        continue;
      }
      const depart = Math.max(time, moveTime[newRow][newCol]);
      const arrive = depart + 1;
      if (arrive < dist[newRow][newCol]) {
        dist[newRow][newCol] = arrive;
        heap.push([newRow, newCol, arrive]);
      }
    }
  }

  return -1;
}
