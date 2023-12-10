export function transpose(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;
  let result = Array.from({ length: n }, () => Array(m));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
