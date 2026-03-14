export function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
  const minWorkerTime = Math.min(...workerTimes);

  let left = 1;
  let right = getUpperBound(mountainHeight, minWorkerTime);

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (canFinishInTime(mountainHeight, workerTimes, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function canFinishInTime(mountainHeight: number, workerTimes: number[], seconds: number): boolean {
  let reduced = 0;

  for (const workerTime of workerTimes) {
    reduced += maxHeightByWorker(workerTime, seconds);

    if (reduced >= mountainHeight) {
      return true;
    }
  }

  return false;
}

function maxHeightByWorker(workerTime: number, seconds: number): number {
  // we need the largest x such that:
  // workerTime * (1 + 2 + ... + x) <= seconds
  // workerTime * x * (x + 1) / 2 <= seconds

  let left = 0;
  let right = Math.floor(Math.sqrt((2 * seconds) / workerTime)) + 2;

  while (left < right) {
    const mid = left + Math.floor((right - left + 1) / 2);
    const required = (workerTime * mid * (mid + 1)) / 2;

    if (required <= seconds) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function getUpperBound(mountainHeight: number, minWorkerTime: number): number {
  // one fastest worker does all the work
  return (minWorkerTime * mountainHeight * (mountainHeight + 1)) / 2;
}
