export function maximumScore(grid: number[][]): number {
  const n = grid.length;

  if (n === 1) {
    return 0;
  }

  const heightCount = n + 1;
  const columnPrefix = buildColumnPrefix(grid);

  let dp = createMatrix(heightCount, heightCount, Number.NEGATIVE_INFINITY);

  // dp[leftHeight][currentHeight] after processing column 0,
  // where column 0 has leftHeight and column 1 has currentHeight
  for (let leftHeight = 0; leftHeight <= n; leftHeight++) {
    for (let currentHeight = 0; currentHeight <= n; currentHeight++) {
      dp[leftHeight][currentHeight] = getGain(columnPrefix[0], leftHeight, currentHeight);
    }
  }

  for (let column = 1; column <= n - 2; column++) {
    dp = transition(dp, columnPrefix[column], heightCount);
  }

  let result = 0;
  const lastColumnPrefix = columnPrefix[n - 1];
  for (let previousHeight = 0; previousHeight <= n; previousHeight++) {
    for (let currentHeight = 0; currentHeight <= n; currentHeight++) {
      const lastColumnGain = getGain(lastColumnPrefix, currentHeight, previousHeight);
      result = Math.max(result, dp[previousHeight][currentHeight] + lastColumnGain);
    }
  }

  return result;
}

function buildColumnPrefix(grid: number[][]): number[][] {
  const n = grid.length;

  const prefix: number[][] = Array.from({ length: n }, () => Array(n + 1).fill(0));
  for (let column = 0; column < n; column++) {
    for (let row = 0; row < n; row++) {
      prefix[column][row + 1] = prefix[column][row] + grid[row][column];
    }
  }
  return prefix;
}

function createMatrix(rows: number, columns: number, value: number): number[][] {
  return Array.from({ length: rows }, () => Array(columns).fill(value));
}

function getGain(prefix: number[], whiteHeight: number, blackNeighborHeight: number): number {
  if (blackNeighborHeight <= whiteHeight) {
    return 0;
  }
  return prefix[blackNeighborHeight] - prefix[whiteHeight];
}

function transition(dp: number[][], currentColumnPrefix: number[], heightCount: number): number[][] {
  const n = heightCount - 1;
  const next = createMatrix(heightCount, heightCount, Number.NEGATIVE_INFINITY);
  for (let currentHeight = 0; currentHeight <= n; currentHeight++) {
    const bestPreviousAtMost = buildBestPreviousAtMost(dp, currentHeight, heightCount);
    const bestPreviousGreater = buildBestPreviousGreater(dp, currentColumnPrefix, currentHeight, heightCount);

    for (let nextHeight = 0; nextHeight <= n; nextHeight++) {
      const gainFromNext = getGain(currentColumnPrefix, currentHeight, nextHeight);
      const casePreviousAtMost = bestPreviousAtMost[nextHeight] + gainFromNext;
      const casePreviousGreater = bestPreviousGreater[nextHeight];
      next[currentHeight][nextHeight] = Math.max(casePreviousAtMost, casePreviousGreater);
    }
  }

  return next;
}

function buildBestPreviousAtMost(dp: number[][], currentHeight: number, heightCount: number): number[] {
  const best: number[] = Array(heightCount).fill(Number.NEGATIVE_INFINITY);
  let runningBest = Number.NEGATIVE_INFINITY;
  for (let previousHeight = 0; previousHeight < heightCount; previousHeight++) {
    runningBest = Math.max(runningBest, dp[previousHeight][currentHeight]);
    best[previousHeight] = runningBest;
  }

  return best;
}

function buildBestPreviousGreater(
  dp: number[][],
  currentColumnPrefix: number[],
  currentHeight: number,
  heightCount: number,
): number[] {
  const best: number[] = Array(heightCount).fill(Number.NEGATIVE_INFINITY);
  let runningBest = Number.NEGATIVE_INFINITY;
  for (let previousHeight = heightCount - 1; previousHeight >= 0; previousHeight--) {
    best[previousHeight] = runningBest;
    const gainFromPrevious = getGain(currentColumnPrefix, currentHeight, previousHeight);
    runningBest = Math.max(runningBest, dp[previousHeight][currentHeight] + gainFromPrevious);
  }

  return best;
}
