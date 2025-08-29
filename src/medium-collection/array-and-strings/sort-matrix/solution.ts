export function sortMatrix(grid: number[][]): number[][] {
  // prepare: dimensions
  const n: number = grid.length;

  // collect values per diagonal key (k = i - j)
  const diagMap: Map<number, number[]> = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const k: number = i - j;
      if (!diagMap.has(k)) {
        diagMap.set(k, []);
      }
      diagMap.get(k)!.push(grid[i][j]);
    }
  }

  // sort each diagonal per rules
  // - k >= 0 (bottom-left incl. main): non-increasing (desc)
  // - k < 0 (top-right): non-decreasing (asc)
  for (const [k, arr] of diagMap.entries()) {
    if (k >= 0) {
      // non-increasing
      arr.sort((a, b) => b - a);
    } else {
      // non-decreasing
      arr.sort((a, b) => a - b);
    }
  }

  // write back values along each diagonal in traversal order
  // we traverse i then j, which walks each diagonal from top-left to bottom-right.
  // we pop from the front via an index per diagonal for O(1) writes.
  const usedIdx: Map<number, number> = new Map();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const k: number = i - j;
      const arr: number[] = diagMap.get(k)!;
      const idx: number = usedIdx.get(k) ?? 0;
      grid[i][j] = arr[idx];
      usedIdx.set(k, idx + 1);
    }
  }

  // done: grid is updated in-place
  return grid;
}
