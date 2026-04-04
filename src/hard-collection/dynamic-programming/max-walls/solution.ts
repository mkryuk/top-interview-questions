export function maxWalls(robots: number[], distance: number[], walls: number[]): number {
  const n = robots.length;

  // sort robots together with their distances
  const pairs: Array<{ pos: number; dist: number }> = [];
  for (let i = 0; i < n; i++) {
    pairs.push({ pos: robots[i], dist: distance[i] });
  }
  pairs.sort((a, b) => a.pos - b.pos);

  const r: number[] = new Array(n);
  const d: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    r[i] = pairs[i].pos;
    d[i] = pairs[i].dist;
  }

  // sort walls for binary search counting
  const sortedWalls = [...walls].sort((a, b) => a - b);

  // counts for each robot if it shoots left or right
  const leftCount: number[] = new Array(n).fill(0);
  const rightCount: number[] = new Array(n).fill(0);

  // actual reachable intervals
  const leftL: number[] = new Array(n);
  const leftR: number[] = new Array(n);
  const rightL: number[] = new Array(n);
  const rightR: number[] = new Array(n);

  for (let i = 0; i < n; i++) {
    // left shot
    let l = r[i] - d[i];
    let rr = r[i];

    if (i > 0) {
      l = Math.max(l, r[i - 1] + 1);
    }

    leftL[i] = l;
    leftR[i] = rr;
    leftCount[i] = countInRange(sortedWalls, l, rr);

    // right shot
    l = r[i];
    rr = r[i] + d[i];

    if (i + 1 < n) {
      rr = Math.min(rr, r[i + 1] - 1);
    }

    rightL[i] = l;
    rightR[i] = rr;
    rightCount[i] = countInRange(sortedWalls, l, rr);
  }

  // overlap between robot i shooting right and robot i+1 shooting left
  const overlap: number[] = new Array(Math.max(0, n - 1)).fill(0);
  for (let i = 0; i + 1 < n; i++) {
    const l = Math.max(rightL[i], leftL[i + 1]);
    const rr = Math.min(rightR[i], leftR[i + 1]);

    if (l <= rr) {
      overlap[i] = countInRange(sortedWalls, l, rr);
    }
  }

  // dp[i][0] = best up to i if robot i shoots left
  // dp[i][1] = best up to i if robot i shoots right
  let prevLeft = leftCount[0];
  let prevRight = rightCount[0];

  for (let i = 1; i < n; i++) {
    const curLeft = Math.max(prevLeft + leftCount[i], prevRight + leftCount[i] - overlap[i - 1]);
    const curRight = Math.max(prevLeft + rightCount[i], prevRight + rightCount[i]);
    prevLeft = curLeft;
    prevRight = curRight;
  }

  return Math.max(prevLeft, prevRight);
}

function countInRange(arr: number[], left: number, right: number): number {
  if (left > right) {
    return 0;
  }

  const lo = lowerBound(arr, left);
  const hi = upperBound(arr, right);
  return hi - lo;
}

function lowerBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function upperBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
