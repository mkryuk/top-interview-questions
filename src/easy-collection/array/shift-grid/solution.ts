export function shiftGrid(grid: number[][], k: number): number[][] {
  const rows = grid.length;
  const columns = grid[0].length;
  const totalElements = rows * columns;
  const shift = k % totalElements;
  const result: number[][] = Array.from({ length: rows }, () => Array<number>(columns));

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      // convert the current position into a one-dimensional index
      const currentIndex = row * columns + column;

      // calculate the shifted one-dimensional index
      const shiftedIndex = (currentIndex + shift) % totalElements;

      // convert the shifted index back into row and column
      const shiftedRow = Math.floor(shiftedIndex / columns);
      const shiftedColumn = shiftedIndex % columns;
      result[shiftedRow][shiftedColumn] = grid[row][column];
    }
  }

  return result;
}
