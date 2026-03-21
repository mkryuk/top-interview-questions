export function minAbsDiff(grid: number[][], k: number): number[][] {
  const m: number = grid.length;
  const n: number = grid[0].length;
  const outRows: number = m - k + 1;
  const outCols: number = n - k + 1;
  const result: number[][] = Array.from({ length: outRows }, () => Array<number>(outCols).fill(0));

  for (let top: number = 0; top < outRows; top++) {
    for (let left: number = 0; left < outCols; left++) {
      const seen: Set<number> = new Set<number>();

      // collect distinct values inside current k x k submatrix
      for (let r: number = top; r < top + k; r++) {
        for (let c: number = left; c < left + k; c++) {
          seen.add(grid[r][c]);
        }
      }

      const values: number[] = Array.from(seen);

      // if only one distinct value exists, answer is 0
      if (values.length <= 1) {
        result[top][left] = 0;
        continue;
      }

      // sort distinct values
      values.sort((a: number, b: number) => a - b);

      // minimum absolute difference is among adjacent sorted values
      let best: number = Number.MAX_SAFE_INTEGER;
      for (let i: number = 1; i < values.length; i++) {
        const diff: number = values[i] - values[i - 1];
        if (diff < best) {
          best = diff;
        }
      }

      result[top][left] = best;
    }
  }

  return result;
}
