export function rotateTheBox(box: string[][]): string[][] {
  let m = box.length;
  let n = box[0].length;

  for (let row = 0; row < m; row++) {
    let empty = n - 1;
    for (let col = n - 1; col >= 0; col--) {
      if (box[row][col] === "*") {
        empty = col - 1;
      } else if (box[row][col] === "#") {
        box[row][col] = ".";
        box[row][empty] = "#";
        empty--;
      }
    }
  }

  const result = Array.from({ length: n }, () => new Array(m));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      result[col][m - row - 1] = box[row][col];
    }
  }

  return result;
}
