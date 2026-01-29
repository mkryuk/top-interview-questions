export function minCost(grid: number[][], k: number): number {
  const m: number = grid.length;
  const n: number = grid[0].length;
  const total: number = m * n;

  const vals: number[] = flattenGrid(grid, m, n);
  const maxV: number = getMaxValue(vals);

  // dpPrev[idx] = min cost to reach cell idx using exactly (t-1) teleports
  let dpPrev: number[] = createArray(total, Number.MAX_SAFE_INTEGER);
  dpPrev[0] = 0;

  // base layer (0 teleports): only right/down transitions in row-major order
  dpPrev = relaxNormalMovesInPlace(dpPrev, vals, m, n);

  let bestAnswer: number = dpPrev[total - 1];

  for (let t: number = 1; t <= k; t += 1) {
    // suffixMin[v] = min dpPrev[idx] among all cells with value >= v
    // this is exactly the best cost to teleport into any cell of value v
    const suffixMin: number[] = buildSuffixMin(dpPrev, vals, maxV);

    // dpCur[idx] = min cost to reach cell idx using exactly t teleports
    let dpCur: number[] = createArray(total, Number.MAX_SAFE_INTEGER);
    dpCur[0] = 0;

    // in row-major order, dpCur can use:
    // - teleport into (i,j) from dpPrev (0 added cost)
    // - normal move from top/left within dpCur (adds destination cell value)
    dpCur = relaxLayerWithTeleportsInPlace(dpCur, suffixMin, vals, m, n);

    if (dpCur[total - 1] < bestAnswer) {
      bestAnswer = dpCur[total - 1];
    }

    dpPrev = dpCur;
  }

  return bestAnswer;
}

function flattenGrid(grid: number[][], m: number, n: number): number[] {
  const vals: number[] = new Array<number>(m * n);

  for (let i: number = 0; i < m; i += 1) {
    for (let j: number = 0; j < n; j += 1) {
      vals[i * n + j] = grid[i][j];
    }
  }

  return vals;
}

function getMaxValue(vals: number[]): number {
  let maxV: number = 0;

  for (let i: number = 0; i < vals.length; i += 1) {
    if (vals[i] > maxV) {
      maxV = vals[i];
    }
  }

  return maxV;
}

function createArray(len: number, fillValue: number): number[] {
  const arr: number[] = new Array<number>(len);

  for (let i: number = 0; i < len; i += 1) {
    arr[i] = fillValue;
  }

  return arr;
}

function relaxNormalMovesInPlace(dp: number[], vals: number[], m: number, n: number): number[] {
  const inf: number = Number.MAX_SAFE_INTEGER;

  for (let i: number = 0; i < m; i += 1) {
    for (let j: number = 0; j < n; j += 1) {
      if (i === 0 && j === 0) {
        continue;
      }

      const idx: number = i * n + j;
      const cost: number = vals[idx];

      let bestPrev: number = inf;

      if (i > 0) {
        const fromTop: number = dp[idx - n];
        if (fromTop < bestPrev) {
          bestPrev = fromTop;
        }
      }

      if (j > 0) {
        const fromLeft: number = dp[idx - 1];
        if (fromLeft < bestPrev) {
          bestPrev = fromLeft;
        }
      }

      if (bestPrev !== inf) {
        dp[idx] = bestPrev + cost;
      }
    }
  }

  return dp;
}

function buildSuffixMin(dpPrev: number[], vals: number[], maxV: number): number[] {
  const inf: number = Number.MAX_SAFE_INTEGER;

  // minByVal[v] = best dpPrev among cells whose grid value == v
  const minByVal: number[] = createArray(maxV + 1, inf);

  for (let idx: number = 0; idx < dpPrev.length; idx += 1) {
    const d: number = dpPrev[idx];
    if (d === inf) {
      continue;
    }

    const v: number = vals[idx];
    if (d < minByVal[v]) {
      minByVal[v] = d;
    }
  }

  // suffixMin[v] = min_{u >= v} minByVal[u]
  const suffixMin: number[] = createArray(maxV + 2, inf);

  for (let v: number = maxV; v >= 0; v -= 1) {
    const a: number = minByVal[v];
    const b: number = suffixMin[v + 1];
    suffixMin[v] = a < b ? a : b;
  }

  return suffixMin;
}

function relaxLayerWithTeleportsInPlace(
  dpCur: number[],
  suffixMin: number[],
  vals: number[],
  m: number,
  n: number,
): number[] {
  const inf: number = Number.MAX_SAFE_INTEGER;

  for (let i: number = 0; i < m; i += 1) {
    for (let j: number = 0; j < n; j += 1) {
      if (i === 0 && j === 0) {
        continue;
      }

      const idx: number = i * n + j;
      const cost: number = vals[idx];

      // teleport directly into this cell (consumes 1 teleport, adds 0 cost)
      let best: number = suffixMin[cost];

      if (i > 0) {
        const up: number = dpCur[idx - n];
        if (up !== inf) {
          const cand: number = up + cost;
          if (cand < best) {
            best = cand;
          }
        }
      }

      if (j > 0) {
        const left: number = dpCur[idx - 1];
        if (left !== inf) {
          const cand: number = left + cost;
          if (cand < best) {
            best = cand;
          }
        }
      }

      dpCur[idx] = best;
    }
  }

  return dpCur;
}
