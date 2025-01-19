import { Heap } from "../../design/heap/heap";

export function trapRainWater(heightMap: number[][]): number {
  const m = heightMap.length;
  const n = heightMap[0].length;
  const heap = new Heap<[number, number, number]>((a, b) => a[2] - b[2]);
  const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (row === 0 || col === 0 || row === m - 1 || col === n - 1) {
        heap.push([row, col, heightMap[row][col]]);
        visited[row][col] = true;
      }
    }
  }
  const directions = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let result = 0;
  while (heap.size() > 0) {
    const [row, col, height] = heap.pop()!;
    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow > 0 && newCol > 0 && newRow < m && newCol < n && !visited[newRow][newCol]) {
        visited[newRow][newCol] = true;
        result += Math.max(0, height - heightMap[newRow][newCol]);
        heap.push([newRow, newCol, Math.max(height, heightMap[newRow][newCol])]);
      }
    }
  }

  return result;
}
