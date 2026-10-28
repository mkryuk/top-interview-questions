export function createGrid(m: number, n: number): string[] {
  const grid: string[] = [];

  for (let row = 0; row < m; row++) {
    let currentRow = "";

    for (let col = 0; col < n; col++) {
      // the only path goes through the first row and last column
      if (row === 0 || col === n - 1) {
        currentRow += ".";
      } else {
        currentRow += "#";
      }
    }

    grid.push(currentRow);
  }

  return grid;
}
