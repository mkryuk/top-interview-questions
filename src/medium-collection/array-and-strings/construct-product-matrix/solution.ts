export function constructProductMatrix(grid: number[][]): number[][] {
  const modulo = 12345;
  const rows = grid.length;
  const cols = grid[0].length;
  const size = rows * cols;
  const flattened = new Array<number>(size);
  const prefixProducts = new Array<number>(size);
  const suffixProducts = new Array<number>(size);
  const result = new Array<number[]>(rows);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      flattened[row * cols + col] = grid[row][col] % modulo;
    }
  }

  prefixProducts[0] = 1;
  for (let index = 1; index < size; index++) {
    prefixProducts[index] = (prefixProducts[index - 1] * flattened[index - 1]) % modulo;
  }

  suffixProducts[size - 1] = 1;
  for (let index = size - 2; index >= 0; index--) {
    suffixProducts[index] = (suffixProducts[index + 1] * flattened[index + 1]) % modulo;
  }

  for (let row = 0; row < rows; row++) {
    result[row] = new Array<number>(cols);
    for (let col = 0; col < cols; col++) {
      const index = row * cols + col;
      result[row][col] = (prefixProducts[index] * suffixProducts[index]) % modulo;
    }
  }

  return result;
}
