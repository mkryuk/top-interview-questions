/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  const matrixLength = matrix.length;
  const border = matrixLength - 1;
  const layersCount = Math.ceil(matrixLength / 2);

  for (let layer = 0; layer < layersCount; layer++) {
    for (let index = layer; index < border - layer; index++) {
      const temp = matrix[layer][index];
      matrix[layer][index] = matrix[border - index][layer];
      matrix[border - index][layer] = matrix[border - layer][border - index];
      matrix[border - layer][border - index] = matrix[index][border - layer];
      matrix[index][border - layer] = temp;
    }
  }
}
