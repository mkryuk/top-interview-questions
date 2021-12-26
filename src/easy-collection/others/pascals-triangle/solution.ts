export function generate(numRows: number): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    let row: number[] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        let value = result[i - 1][j - 1] + result[i - 1][j];
        row.push(value);
      }
    }
    result.push(row);
  }
  return result;
}
