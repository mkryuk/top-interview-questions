export function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  let n = s.length;
  let sections = Math.ceil(n / (2 * numRows - 2));
  let numCols = sections * (numRows - 1);
  let matrix = new Array(numRows).fill(0).map(() => new Array(numCols).fill(" "));

  let currRow = 0;
  let currCol = 0;
  let currStringIndex = 0;
  while (currStringIndex < n) {
    while (currRow < numRows && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currStringIndex++;
      currRow++;
    }

    currRow -= 2;
    currCol++;
    while (currRow > 0 && currCol < numCols && currStringIndex < n) {
      matrix[currRow][currCol] = s[currStringIndex];
      currRow--;
      currCol++;
      currStringIndex++;
    }
  }

  let result = matrix
    .map((m) => m.join(""))
    .join("")
    .replace(/\s/g, "");
  return result;
}
