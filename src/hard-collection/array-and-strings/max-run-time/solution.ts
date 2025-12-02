export function maxRunTime(n: number, batteries: number[]): number {
  // compute the sum of all batteries to set the upper bound
  let sum: number = 0;
  for (let i: number = 0; i < batteries.length; i++) {
    sum += batteries[i];
  }

  let left: number = 0;
  let right: number = Math.floor(sum / n);

  // binary search for the maximum feasible time
  while (left < right) {
    const mid: number = Math.floor((left + right + 1) / 2);
    if (canRun(mid, n, batteries)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// if we can run all n computers for 'time' minutes
function canRun(time: number, n: number, batteries: number[]): boolean {
  let total: number = 0;

  for (let i: number = 0; i < batteries.length; i++) {
    // add min(battery, time) to total
    total += Math.min(batteries[i], time);

    // early exit if we already have enough power
    if (total >= time * n) {
      return true;
    }
  }

  return total >= time * n;
}
