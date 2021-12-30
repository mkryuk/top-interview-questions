/**
 Do not return anything, modify matrix in-place instead.
 */
export function setZeroes(matrix: number[][]): void {
  let rowZeroes = new Set<number>();
  let colZeroes = new Set<number>();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowZeroes.add(i);
        colZeroes.add(j);
      }
    }
  }
  rowZeroes.forEach((r) => {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[r][i] = 0;
    }
  });
  colZeroes.forEach((c) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  });
}
