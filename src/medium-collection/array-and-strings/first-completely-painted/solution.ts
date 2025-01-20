export function firstCompleteIndex(arr: number[], mat: number[][]): number {
  // map number and it's [row, col]
  const rowColMap = new Map<number, number[]>();
  const m = mat.length;
  const n = mat[0].length;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      rowColMap.set(mat[row][col], [row, col]);
    }
  }
  const rowCount = new Array(m).fill(0);
  const colCount = new Array(n).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const [row, col] = rowColMap.get(arr[i])!;
    rowCount[row]++;
    colCount[col]++;
    if (rowCount[row] === n || colCount[col] === m) {
      return i;
    }
  }

  return -1;
}
