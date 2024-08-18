export function maxPoints(points: number[][]): number {
  const m = points.length;
  const n = points[0].length;

  // dp array to store maximum points up to each row
  let prev = points[0].slice();

  for (let r = 1; r < m; r++) {
    const curr = new Array(n).fill(0);
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    // calculate leftMax: maximum score we can achieve coming from the left
    leftMax[0] = prev[0];
    for (let c = 1; c < n; c++) {
      leftMax[c] = Math.max(leftMax[c - 1] - 1, prev[c]);
    }

    // calculate rightMax: maximum score we can achieve coming from the right
    rightMax[n - 1] = prev[n - 1];
    for (let c = n - 2; c >= 0; c--) {
      rightMax[c] = Math.max(rightMax[c + 1] - 1, prev[c]);
    }

    // calculate current dp row
    for (let c = 0; c < n; c++) {
      curr[c] = points[r][c] + Math.max(leftMax[c], rightMax[c]);
    }

    // update prev to be current row for next iteration
    prev = curr;
  }

  // the result will be the maximum value in the last dp row
  return Math.max(...prev);
}
