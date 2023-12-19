export function imageSmoother(img: number[][]): number[][] {
  const m = img.length;
  const n = img[0].length;
  const result: number[][] = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      let count = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (i + x >= 0 && i + x < m && j + y >= 0 && j + y < n) {
            sum += img[i + x][j + y];
            count++;
          }
        }
      }
      result[i][j] = Math.floor(sum / count);
    }
  }

  return result;
}
