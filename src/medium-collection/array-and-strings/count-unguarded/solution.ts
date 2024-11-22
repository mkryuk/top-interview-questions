export function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  let traceTable = Array.from({ length: m }, () => new Array(n).fill(0));
  for (const [row, col] of guards) {
    traceTable[row][col] = 2;
  }

  for (const [row, col] of walls) {
    traceTable[row][col] = 3;
  }

  for (const [row, col] of guards) {
    trace(row, col + 1, 0, 1, traceTable);
    trace(row, col - 1, 0, -1, traceTable);
    trace(row + 1, col, 1, 0, traceTable);
    trace(row - 1, col, -1, 0, traceTable);
  }

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (traceTable[i][j] === 0) {
        result++;
      }
    }
  }

  return result;
}

function trace(x: number, y: number, dx: number, dy: number, traceTable: number[][]): void {
  const m = traceTable.length;
  const n = traceTable[0].length;
  while (x >= 0 && x < m && y >= 0 && y < n) {
    if (x < 0 || y < 0 || x >= m || y >= n || traceTable[x][y] > 1) {
      break;
    }
    if (traceTable[x][y] === 0) {
      traceTable[x][y] = 1;
    }
    x += dx;
    y += dy;
  }
}
