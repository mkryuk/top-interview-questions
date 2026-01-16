export function maximizeSquareHoleArea(n: number, m: number, hBars: number[], vBars: number[]): number {
  const maxH: number = maxMergedCells(hBars);
  const maxV: number = maxMergedCells(vBars);

  const side: number = Math.min(maxH, maxV);

  return side * side;
}

function maxMergedCells(bars: number[]): number {
  // we can always choose to remove none, giving at least 1 cell
  if (bars.length === 0) {
    return 1;
  }

  const sorted: number[] = bars.slice().sort((a, b) => a - b);

  let bestRun: number = 0;
  let run: number = 1;

  for (let i: number = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      run++;
    } else {
      bestRun = Math.max(run, bestRun);

      run = 1;
    }
  }
  bestRun = Math.max(run, bestRun);

  // removing k consecutive bars merges k+1 unit cells
  const merged: number = bestRun + 1;

  // also allow removing none
  return Math.max(1, merged);
}
