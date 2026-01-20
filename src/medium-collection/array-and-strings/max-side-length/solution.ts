type PrefixSum = number[][];

export function maxSideLength(mat: number[][], threshold: number): number {
  const rows = mat.length;
  const cols = mat[0].length;
  const prefix = buildPrefixSum(mat);

  let low = 0;
  let high = Math.min(rows, cols);
  while (low < high) {
    // Mid bias up to prevent infinite loop when low + 1 === high.
    const mid = Math.floor((low + high + 1) / 2);
    if (hasSquareWithinThreshold(prefix, rows, cols, mid, threshold)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

function buildPrefixSum(mat: number[][]): PrefixSum {
  const rows = mat.length;
  const cols = mat[0].length;
  const prefix: PrefixSum = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

  for (let r = 1; r <= rows; r += 1) {
    for (let c = 1; c <= cols; c += 1) {
      // 1-based prefix sum so any sub-square sum is O(1).
      prefix[r][c] = mat[r - 1][c - 1] + prefix[r - 1][c] + prefix[r][c - 1] - prefix[r - 1][c - 1];
    }
  }

  return prefix;
}

function hasSquareWithinThreshold(
  prefix: PrefixSum,
  rows: number,
  cols: number,
  size: number,
  threshold: number,
): boolean {
  if (size === 0) {
    return true;
  }
  for (let r = size; r <= rows; r += 1) {
    for (let c = size; c <= cols; c += 1) {
      // Use inclusion-exclusion to get the sum of the size x size square.
      const total = prefix[r][c] - prefix[r - size][c] - prefix[r][c - size] + prefix[r - size][c - size];
      if (total <= threshold) {
        return true;
      }
    }
  }
  return false;
}
