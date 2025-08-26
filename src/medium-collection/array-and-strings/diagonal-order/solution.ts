export function findDiagonalOrder(mat: number[][]): number[] {
  // guard: empty matrix
  if (mat.length === 0 || mat[0].length === 0) {
    return [];
  }

  // dimensions
  const m: number = mat.length;
  const n: number = mat[0].length;

  // result container
  const res: number[] = new Array(m * n);

  // current position and direction
  let i: number = 0; // row
  let j: number = 0; // col
  let dir: 1 | -1 = 1; // 1 means moving up-right, -1 means moving down-left

  // iterate over all cells exactly once
  for (let k = 0; k < m * n; k += 1) {
    // push current cell
    res[k] = mat[i][j];

    // move according to direction
    if (dir === 1) {
      // moving up-right
      i -= 1;
      j += 1;

      // handle boundaries for up-right movement
      if (j === n) {
        // hit right wall, step down two and flip direction
        j = n - 1;
        i += 2;
        dir = -1;
      } else if (i < 0) {
        // went above top, clamp to first row and flip direction
        i = 0;
        dir = -1;
      }
    } else {
      // moving down-left
      i += 1;
      j -= 1;

      // handle boundaries for down-left movement
      if (i === m) {
        // hit bottom wall, step right two and flip direction
        i = m - 1;
        j += 2;
        dir = 1;
      } else if (j < 0) {
        // went past left wall, clamp to first column and flip direction
        j = 0;
        dir = 1;
      }
    }
  }

  return res;
}
