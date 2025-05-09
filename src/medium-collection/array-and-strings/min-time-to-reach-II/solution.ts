import { Heap } from "../../../hard-collection/design/heap/heap";

export function minTimeToReach(moveTime: number[][]): number {
  const rows = moveTime.length;
  const cols = moveTime[0].length;
  const dist = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  dist[0][0] = 0;
  // [row, col, time, parity]
  const heap = new Heap<[number, number, number, boolean]>((a, b) => a[2] - b[2]);
  heap.push([0, 0, 0, true]);
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  while (!heap.isEmpty()) {
    const [row, col, time, parity] = heap.pop()!;
    if (time > dist[row][col]) {
      continue;
    }
    if (row === rows - 1 && col === cols - 1) {
      return time;
    }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        continue;
      }
      const depart = Math.max(time, moveTime[newRow][newCol]);
      const diff = parity ? 1 : 2;
      const arrive = depart + diff;
      if (arrive < dist[newRow][newCol]) {
        dist[newRow][newCol] = arrive;
        heap.push([newRow, newCol, arrive, !parity]);
      }
    }
  }
  return -1;
}
