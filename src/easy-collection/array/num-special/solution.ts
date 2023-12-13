export function numSpecial(mat: number[][]): number {
  let m = mat.length;
  let n = mat[0].length;
  let rowCount = new Array(m).fill(0);
  let colCount = new Array(n).fill(0);
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 1) {
        rowCount[row]++;
        colCount[col]++;
      }
    }
  }

  let result = 0;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 1 && rowCount[row] === 1 && colCount[col] === 1) {
        result++;
      }
    }
  }
  return result;
}
