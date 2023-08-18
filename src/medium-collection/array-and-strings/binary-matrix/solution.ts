export function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // up, down, left, right
  let result = Array.from({ length: m }, () =>
    new Array<number>(n).fill(Number.MAX_SAFE_INTEGER),
  );
  let queue: [number, number][] = [];

  // Add all 0's to the queue and initialize result matrix
  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (mat[x][y] === 0) {
        queue.push([x, y]);
        result[x][y] = 0;
      }
    }
  }

  while (queue.length > 0) {
    let [x, y] = queue.shift()!;
    for (const [dx, dy] of dirs) {
      const newX = x + dx;
      const newY = y + dy;
      // Check boundaries and result value
      if (
        newX >= 0 &&
        newX < m &&
        newY >= 0 &&
        newY < n &&
        result[newX][newY] > result[x][y] + 1
      ) {
        result[newX][newY] = result[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  }

  return result;
}
