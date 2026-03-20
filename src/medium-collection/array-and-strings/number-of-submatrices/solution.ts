export function numberOfSubmatrices(grid: string[][]): number {
  const rows: number = grid.length;
  const cols: number = grid[0].length;

  let result: number = 0;

  // prefix counts for x and y per column
  const xCol: number[] = new Array(cols).fill(0);
  const yCol: number[] = new Array(cols).fill(0);

  for (let r = 0; r < rows; r++) {
    let xCount: number = 0;
    let yCount: number = 0;
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "X") {
        xCol[c]++;
      } else if (grid[r][c] === "Y") {
        yCol[c]++;
      }
      // every valid submatrix must start at (0, 0),
      // so for each bottom-right corner (r, c),
      // we just check the rectangle [0..r][0..c]
      xCount += xCol[c];
      yCount += yCol[c];

      if (xCount > 0 && xCount === yCount) {
        result++;
      }
    }
  }

  return result;
}
