export function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const result = Array.from({ length: rowSum.length }, () => Array(colSum.length).fill(0));

  const rowSumCopy = [...rowSum];
  const colSumCopy = [...colSum];

  let rowIndex = 0;
  let colIndex = 0;
  while (rowIndex < rowSum.length && colIndex < colSumCopy.length) {
    if (rowSumCopy[rowIndex] < colSumCopy[colIndex]) {
      result[rowIndex][colIndex] = rowSumCopy[rowIndex];
      colSumCopy[colIndex] -= rowSumCopy[rowIndex];
      rowIndex++;
    } else if (rowSumCopy[rowIndex] > colSumCopy[colIndex]) {
      result[rowIndex][colIndex] = colSumCopy[colIndex];
      rowSumCopy[rowIndex] -= colSumCopy[colIndex];
      colIndex++;
    } else {
      result[rowIndex][colIndex] = colSumCopy[colIndex];
      colIndex++;
      rowIndex++;
    }
  }
  return result;
}
