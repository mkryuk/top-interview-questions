export function canPartitionGrid(grid: number[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;

  let totalSum = 0;
  const rowSums = new Array(rows).fill(0);
  const colSums = new Array(cols).fill(0);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const value = grid[row][col];
      totalSum += value;
      rowSums[row] += value;
      colSums[col] += value;
    }
  }

  if (totalSum % 2 !== 0) {
    return false;
  }

  const target = totalSum / 2;

  let prefixSum = 0;
  for (let row = 0; row < rows - 1; row++) {
    prefixSum += rowSums[row];
    if (prefixSum === target) {
      return true;
    }
  }

  prefixSum = 0;
  for (let col = 0; col < cols - 1; col++) {
    prefixSum += colSums[col];
    if (prefixSum === target) {
      return true;
    }
  }

  return false;
}
