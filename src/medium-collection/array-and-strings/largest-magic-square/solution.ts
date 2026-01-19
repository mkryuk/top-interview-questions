export function largestMagicSquare(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0].length;

  const rowPref: number[][] = buildRowPrefix(grid);
  const colPref: number[][] = buildColPrefix(grid);
  const diag1Pref: number[][] = buildDiag1Prefix(grid);
  const diag2Pref: number[][] = buildDiag2Prefix(grid);

  const maxK: number = Math.min(m, n);

  for (let k: number = maxK; k >= 2; k--) {
    for (let r: number = 0; r + k <= m; r++) {
      for (let c: number = 0; c + k <= n; c++) {
        if (isMagicAt(r, c, k, rowPref, colPref, diag1Pref, diag2Pref)) {
          return k;
        }
      }
    }
  }

  return 1;
}

function buildRowPrefix(grid: number[][]): number[][] {
  const m: number = grid.length;
  const n: number = grid[0].length;

  const pref: number[][] = new Array(m);

  for (let i: number = 0; i < m; i++) {
    pref[i] = new Array(n + 1);
    pref[i][0] = 0;

    for (let j: number = 0; j < n; j++) {
      pref[i][j + 1] = pref[i][j] + grid[i][j];
    }
  }

  return pref;
}

function buildColPrefix(grid: number[][]): number[][] {
  const m: number = grid.length;
  const n: number = grid[0].length;

  const pref: number[][] = new Array(m + 1);

  for (let i: number = 0; i <= m; i++) {
    pref[i] = new Array(n);
    for (let j: number = 0; j < n; j++) {
      pref[i][j] = 0;
    }
  }

  for (let i: number = 0; i < m; i++) {
    for (let j: number = 0; j < n; j++) {
      pref[i + 1][j] = pref[i][j] + grid[i][j];
    }
  }

  return pref;
}

function buildDiag1Prefix(grid: number[][]): number[][] {
  // main diagonal prefix (top-left -> bottom-right)
  const m: number = grid.length;
  const n: number = grid[0].length;

  const pref: number[][] = new Array(m + 1);

  for (let i: number = 0; i <= m; i++) {
    pref[i] = new Array(n + 1);
    for (let j: number = 0; j <= n; j++) {
      pref[i][j] = 0;
    }
  }

  for (let i: number = 0; i < m; i++) {
    for (let j: number = 0; j < n; j++) {
      pref[i + 1][j + 1] = pref[i][j] + grid[i][j];
    }
  }

  return pref;
}

function buildDiag2Prefix(grid: number[][]): number[][] {
  // anti-diagonal prefix (top-right -> bottom-left)
  // pref[i + 1][j] = grid[i][j] + pref[i][j + 1]
  const m: number = grid.length;
  const n: number = grid[0].length;

  const pref: number[][] = new Array(m + 1);

  for (let i: number = 0; i <= m; i++) {
    pref[i] = new Array(n + 1);
    for (let j: number = 0; j <= n; j++) {
      pref[i][j] = 0;
    }
  }

  for (let i: number = 0; i < m; i++) {
    for (let j: number = n - 1; j >= 0; j--) {
      pref[i + 1][j] = grid[i][j] + pref[i][j + 1];
    }
  }

  return pref;
}

function isMagicAt(
  r: number,
  c: number,
  k: number,
  rowPref: number[][],
  colPref: number[][],
  diag1Pref: number[][],
  diag2Pref: number[][],
): boolean {
  const target: number = getRowSum(r, c, k, rowPref);

  // check rows
  for (let i: number = 0; i < k; i++) {
    const s: number = getRowSum(r + i, c, k, rowPref);
    if (s !== target) {
      return false;
    }
  }

  // check cols
  for (let j: number = 0; j < k; j++) {
    const s: number = getColSum(r, c + j, k, colPref);
    if (s !== target) {
      return false;
    }
  }

  // check main diagonal
  const d1: number = getDiag1Sum(r, c, k, diag1Pref);
  if (d1 !== target) {
    return false;
  }

  // check anti diagonal
  const d2: number = getDiag2Sum(r, c, k, diag2Pref);
  if (d2 !== target) {
    return false;
  }

  return true;
}

function getRowSum(r: number, c: number, k: number, rowPref: number[][]): number {
  return rowPref[r][c + k] - rowPref[r][c];
}

function getColSum(r: number, c: number, k: number, colPref: number[][]): number {
  return colPref[r + k][c] - colPref[r][c];
}

function getDiag1Sum(r: number, c: number, k: number, diag1Pref: number[][]): number {
  return diag1Pref[r + k][c + k] - diag1Pref[r][c];
}

function getDiag2Sum(r: number, c: number, k: number, diag2Pref: number[][]): number {
  // anti-diagonal from (r, c + k - 1) to (r + k - 1, c)
  return diag2Pref[r + k][c] - diag2Pref[r][c + k];
}
