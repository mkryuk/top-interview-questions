export function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length;
  const n = isWater[0].length;
  const heightMap = Array.from({ length: m }, () => new Array(n).fill(-1));
  const queue: [number, number][] = [];
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (isWater[row][col] === 1) {
        heightMap[row][col] = 0;
        queue.push([row, col]);
      }
    }
  }
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let qIndex = 0;
  while (qIndex < queue.length) {
    const [row, col] = queue[qIndex++];
    for (const [rx, cx] of directions) {
      const newRow = row + rx;
      const newCol = col + cx;
      if (newRow >= 0 && newCol >= 0 && newRow < m && newCol < n && heightMap[newRow][newCol] === -1) {
        heightMap[newRow][newCol] = heightMap[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }
  return heightMap;
}
