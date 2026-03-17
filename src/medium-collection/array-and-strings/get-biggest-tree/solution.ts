export function getBiggestThree(grid: number[][]): number[] {
  const rows = grid.length;
  const cols = grid[0].length;

  const diagDownRight = buildDiagDownRightPrefix(grid);
  const diagDownLeft = buildDiagDownLeftPrefix(grid);
  const best = new Set<number>();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // area 0 rhombus
      best.add(grid[r][c]);

      // try all possible radii
      const maxRadius = getMaxRadius(r, c, rows, cols);

      for (let radius = 1; radius <= maxRadius; radius++) {
        const sum = getRhombusBorderSum(grid, diagDownRight, diagDownLeft, r, c, radius);
        best.add(sum);
      }
    }
  }

  return Array.from(best)
    .sort((a, b) => b - a)
    .slice(0, 3);
}

function buildDiagDownRightPrefix(grid: number[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;
  const prefix: number[][] = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      prefix[r + 1][c + 1] = grid[r][c] + prefix[r][c];
    }
  }

  return prefix;
}

function buildDiagDownLeftPrefix(grid: number[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;
  const prefix: number[][] = Array.from({ length: rows + 1 }, () => new Array(cols + 2).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = cols - 1; c >= 0; c--) {
      prefix[r + 1][c] = grid[r][c] + prefix[r][c + 1];
    }
  }

  return prefix;
}

function getMaxRadius(r: number, c: number, rows: number, cols: number): number {
  return Math.min(c, cols - 1 - c, (rows - 1 - r) / 2) | 0;
}

function getRhombusBorderSum(
  grid: number[][],
  diagDownRight: number[][],
  diagDownLeft: number[][],
  topRow: number,
  topCol: number,
  radius: number,
): number {
  const leftRow = topRow + radius;
  const leftCol = topCol - radius;

  const rightRow = topRow + radius;
  const rightCol = topCol + radius;

  const bottomRow = topRow + 2 * radius;
  const bottomCol = topCol;

  // four edges
  // 1) top -> right      (down-right)
  // 2) right -> bottom   (down-left)
  // 3) top -> left       (down-left)
  // 4) left -> bottom    (down-right)
  const edge1 = sumDiagDownRight(diagDownRight, topRow, topCol, rightRow, rightCol);
  const edge2 = sumDiagDownLeft(diagDownLeft, rightRow, rightCol, bottomRow, bottomCol);
  const edge3 = sumDiagDownLeft(diagDownLeft, topRow, topCol, leftRow, leftCol);
  const edge4 = sumDiagDownRight(diagDownRight, leftRow, leftCol, bottomRow, bottomCol);

  // corners were counted twice, subtract them once
  return (
    edge1 +
    edge2 +
    edge3 +
    edge4 -
    grid[topRow][topCol] -
    grid[rightRow][rightCol] -
    grid[leftRow][leftCol] -
    grid[bottomRow][bottomCol]
  );
}

function sumDiagDownRight(prefix: number[][], r1: number, c1: number, r2: number, c2: number): number {
  // assumes (r2 - r1) === (c2 - c1) and inclusive endpoints
  return prefix[r2 + 1][c2 + 1] - prefix[r1][c1];
}

function sumDiagDownLeft(prefix: number[][], r1: number, c1: number, r2: number, c2: number): number {
  // assumes (r2 - r1) === (c1 - c2) and inclusive endpoints
  return prefix[r2 + 1][c2] - prefix[r1][c1 + 1];
}
