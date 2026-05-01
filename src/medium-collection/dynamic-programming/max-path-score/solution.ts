export function maxPathScore(grid: number[][], k: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const unreachable = -1;
  const dp: Int32Array[] = createDp(cols, k, unreachable);

  for (let row = 0; row < rows; row++) {
    let left = createState(k, unreachable);
    for (let col = 0; col < cols; col++) {
      const current = createState(k, unreachable);
      const value = grid[row][col];
      const cellCost = getCellCost(value);
      const cellScore = value;

      if (row === 0 && col === 0) {
        current[0] = 0;
      } else {
        transitionFromPrevious(dp[col], current, cellCost, cellScore, k);
        transitionFromPrevious(left, current, cellCost, cellScore, k);
      }

      dp[col] = current;
      left = current;
    }
  }

  return getBestScore(dp[cols - 1], k);
}

function createDp(cols: number, k: number, unreachable: number): Int32Array[] {
  const dp: Int32Array[] = [];
  for (let col = 0; col < cols; col++) {
    dp.push(createState(k, unreachable));
  }
  return dp;
}

function createState(k: number, unreachable: number): Int32Array {
  const state = new Int32Array(k + 1);
  state.fill(unreachable);
  return state;
}

function getCellCost(value: number): number {
  if (value === 0) {
    return 0;
  }
  return 1;
}

function transitionFromPrevious(
  previous: Int32Array,
  current: Int32Array,
  cellCost: number,
  cellScore: number,
  k: number,
): void {
  for (let prevCost = 0; prevCost + cellCost <= k; prevCost++) {
    if (previous[prevCost] === -1) {
      continue;
    }
    const nextCost = prevCost + cellCost;
    const nextScore = previous[prevCost] + cellScore;
    current[nextCost] = Math.max(current[nextCost], nextScore);
  }
}

function getBestScore(finalState: Int32Array, k: number): number {
  let best = -1;
  for (let cost = 0; cost <= k; cost++) {
    best = Math.max(best, finalState[cost]);
  }
  return best;
}
