export function equalPairs(grid: number[][]): number {
  const rowsMap = new Map<string, number>();
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].join();
    if (!rowsMap.has(row)) {
      rowsMap.set(row, 0);
    }
    rowsMap.set(row, rowsMap.get(row)! + 1);
  }

  let result = 0;
  for (let j = 0; j < grid[0].length; j++) {
    const columnNumbers = [];
    for (let i = 0; i < grid.length; i++) {
      columnNumbers.push(grid[i][j]);
    }
    const column = columnNumbers.join();
    if (rowsMap.has(column)) {
      result += rowsMap.get(column)!;
    }
  }

  return result;
}
