export function luckyNumbers(matrix: number[][]): number[] {
  const colsMax = new Set<number>();
  const rowsMin = new Set<number>();

  // find the minimum in each row and add to rowsMin set
  for (let row = 0; row < matrix.length; row++) {
    rowsMin.add(Math.min(...matrix[row]));
  }

  // find the maximum in each column and add to colsMax set
  for (let col = 0; col < matrix[0].length; col++) {
    let max = matrix[0][col];
    for (let row = 0; row < matrix.length; row++) {
      max = Math.max(max, matrix[row][col]);
    }
    colsMax.add(max);
  }

  // find the intersection of rowsMin and colsMax
  const result: number[] = [];
  for (const item of rowsMin.values()) {
    if (colsMax.has(item)) {
      result.push(item);
    }
  }
  return result;
}
