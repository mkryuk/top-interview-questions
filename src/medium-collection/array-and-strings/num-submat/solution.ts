export function numSubmat(mat: number[][]): number {
  // guard for empty input
  if (mat.length === 0 || mat[0].length === 0) {
    return 0;
  }

  // accumulate consecutive ones vertically as histogram heights
  const m: number = mat.length;
  const n: number = mat[0].length;
  const heights: number[] = new Array(n).fill(0);

  let total: number = 0;

  for (let i: number = 0; i < m; i++) {
    // update histogram for current row
    for (let j: number = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        heights[j] = heights[j] + 1;
      } else {
        heights[j] = 0;
      }
    }

    // count submatrices with bottom row at i
    for (let right: number = 0; right < n; right++) {
      if (heights[right] === 0) {
        continue;
      }

      // walk left and keep the minimum height to ensure all ones
      let minH: number = heights[right];

      for (let left: number = right; left >= 0; left--) {
        if (heights[left] === 0) {
          break;
        }

        if (heights[left] < minH) {
          minH = heights[left];
        }

        // add rectangles whose bottom is row i and span columns [left..right]
        total = total + minH;
      }
    }
  }

  return total;
}
