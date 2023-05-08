export function diagonalSum(mat: number[][]): number {
  let result = 0;
  const n = mat.length - 1;
  const isOdd = mat.length % 2;
  let center = Math.floor(mat.length / 2);
  for (let i = 0; i < mat.length; i++) {
    if (isOdd && i === center) {
      result += mat[center][center];
      continue;
    }
    result += mat[i][i] + mat[i][n - i];
  }
  return result;
}
