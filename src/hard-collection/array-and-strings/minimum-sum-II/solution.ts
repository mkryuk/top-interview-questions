// find the minimum total area of 3 non-overlapping rectangles covering all 1's
// approach: enumerate guillotine partitions (H|V variants + H|H|H), plus the
// vertical-symmetric cases by rotating the grid 90° CCW.

export function minimumSum(grid: number[][]): number {
  {
    // validate basic shape
    if (grid.length === 0 || grid[0].length === 0) {
      return 0;
    }

    const rotated: number[][] = rotate90CCW(grid);

    // enumerate in original orientation and in rotated orientation
    return Math.min(enumerateSplits(grid), enumerateSplits(rotated));
  }
}

// compute bounding-box area of all 1's inside [top..bottom] × [left..right].
// if the sub-rectangle contains no 1's, return a very large number to
// effectively disqualify the split (matches your original semantics).
function areaOfOnesBBox(grid: number[][], top: number, bottom: number, left: number, right: number): number {
  {
    const n: number = grid.length;
    const m: number = grid[0].length;

    // bounds safety (not strictly needed for trusted inputs, but cheap)
    if (top < 0 || left < 0 || bottom >= n || right >= m || top > bottom || left > right) {
      return Number.MAX_SAFE_INTEGER / 3;
    }

    let minRow: number = n;
    let maxRow: number = -1;
    let minCol: number = m;
    let maxCol: number = -1;

    for (let i = top; i <= bottom; i++) {
      for (let j = left; j <= right; j++) {
        if (grid[i][j] === 1) {
          if (i < minRow) {
            minRow = i;
          }
          if (i > maxRow) {
            maxRow = i;
          }
          if (j < minCol) {
            minCol = j;
          }
          if (j > maxCol) {
            maxCol = j;
          }
        }
      }
    }

    if (maxRow < 0) {
      // no ones found in this region
      return Number.MAX_SAFE_INTEGER / 3;
    } else {
      return (maxRow - minRow + 1) * (maxCol - minCol + 1);
    }
  }
}

// rotate matrix 90° counter-clockwise: (i, j) -> (m-1-j, i)
function rotate90CCW(src: number[][]): number[][] {
  {
    const n: number = src.length;
    const m: number = src[0].length;

    const dst: number[][] = Array.from({ length: m }, () => new Array<number>(n));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        dst[m - j - 1][i] = src[i][j];
      }
    }

    return dst;
  }
}

// enumerate all guillotine partitions in the current orientation:
// - two horizontal cuts (H/H/H)
// - one horizontal cut, then a vertical cut on the top band (H then V top)
// - one horizontal cut, then a vertical cut on the bottom band (H then V bottom)
// the vertical-symmetric cases (V/V/V and V then H) are covered by rotating.
function enumerateSplits(grid: number[][]): number {
  {
    const n: number = grid.length;
    const m: number = grid[0].length;

    let best: number = Number.MAX_SAFE_INTEGER / 3;

    // pattern 1: H then V on bottom band, and H then V on top band
    for (let topEnd = 0; topEnd + 1 < n; topEnd++) {
      for (let midCol = 0; midCol + 1 < m; midCol++) {
        {
          // top / (bot-left | bot-right)
          const a1: number = areaOfOnesBBox(grid, 0, topEnd, 0, m - 1);
          const a2: number = areaOfOnesBBox(grid, topEnd + 1, n - 1, 0, midCol);
          const a3: number = areaOfOnesBBox(grid, topEnd + 1, n - 1, midCol + 1, m - 1);
          const sum: number = a1 + a2 + a3;
          if (sum < best) {
            best = sum;
          }
        }
        {
          // (top-left | top-right) / bottom
          const b1: number = areaOfOnesBBox(grid, 0, topEnd, 0, midCol);
          const b2: number = areaOfOnesBBox(grid, 0, topEnd, midCol + 1, m - 1);
          const b3: number = areaOfOnesBBox(grid, topEnd + 1, n - 1, 0, m - 1);
          const sum: number = b1 + b2 + b3;
          if (sum < best) {
            best = sum;
          }
        }
      }
    }

    // pattern 2: H / H / H (three horizontal bands)
    for (let r1 = 0; r1 + 2 < n; r1++) {
      for (let r2 = r1 + 1; r2 + 1 < n; r2++) {
        const c1: number = areaOfOnesBBox(grid, 0, r1, 0, m - 1);
        const c2: number = areaOfOnesBBox(grid, r1 + 1, r2, 0, m - 1);
        const c3: number = areaOfOnesBBox(grid, r2 + 1, n - 1, 0, m - 1);
        const sum: number = c1 + c2 + c3;
        if (sum < best) {
          best = sum;
        }
      }
    }

    return best;
  }
}
