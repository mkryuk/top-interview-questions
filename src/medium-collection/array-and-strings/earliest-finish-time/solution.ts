export function earliestFinishTime(
  landStartTime: number[],
  landDuration: number[],
  waterStartTime: number[],
  waterDuration: number[],
): number {
  const landThenWater = getBestOrderFinish(landStartTime, landDuration, waterStartTime, waterDuration);
  const waterThenLand = getBestOrderFinish(waterStartTime, waterDuration, landStartTime, landDuration);
  return Math.min(landThenWater, waterThenLand);
}

function getBestOrderFinish(
  firstStartTime: number[],
  firstDuration: number[],
  secondStartTime: number[],
  secondDuration: number[],
): number {
  const rides: Ride[] = [];

  for (let i = 0; i < secondStartTime.length; i++) {
    rides.push({
      start: secondStartTime[i],
      duration: secondDuration[i],
    });
  }

  rides.sort((a, b) => a.start - b.start);

  const starts = rides.map((ride) => ride.start);
  const prefixMinDuration = buildPrefixMinDuration(rides);
  const suffixMinFinishIfWait = buildSuffixMinFinishIfWait(rides);

  let result = Number.POSITIVE_INFINITY;

  for (let i = 0; i < firstStartTime.length; i++) {
    const firstFinishTime = firstStartTime[i] + firstDuration[i];
    const bestSecondFinish = getBestSecondRideFinish(firstFinishTime, starts, prefixMinDuration, suffixMinFinishIfWait);
    result = Math.min(result, bestSecondFinish);
  }

  return result;
}

function getBestSecondRideFinish(
  firstFinishTime: number,
  starts: number[],
  prefixMinDuration: number[],
  suffixMinFinishIfWait: number[],
): number {
  const countOpened = upperBound(starts, firstFinishTime);

  let best = Number.POSITIVE_INFINITY;

  // second ride is already open, so finish is firstFinishTime + duration
  if (countOpened > 0) {
    best = Math.min(best, firstFinishTime + prefixMinDuration[countOpened - 1]);
  }

  // second ride is not open yet, so finish is start + duration
  if (countOpened < starts.length) {
    best = Math.min(best, suffixMinFinishIfWait[countOpened]);
  }

  return best;
}

function buildPrefixMinDuration(rides: Ride[]): number[] {
  const prefixMinDuration: number[] = new Array(rides.length);

  for (let i = 0; i < rides.length; i++) {
    if (i === 0) {
      prefixMinDuration[i] = rides[i].duration;
    } else {
      prefixMinDuration[i] = Math.min(prefixMinDuration[i - 1], rides[i].duration);
    }
  }

  return prefixMinDuration;
}

function buildSuffixMinFinishIfWait(rides: Ride[]): number[] {
  const suffixMinFinishIfWait: number[] = new Array(rides.length);

  for (let i = rides.length - 1; i >= 0; i--) {
    const finishIfWait = rides[i].start + rides[i].duration;

    if (i === rides.length - 1) {
      suffixMinFinishIfWait[i] = finishIfWait;
    } else {
      suffixMinFinishIfWait[i] = Math.min(finishIfWait, suffixMinFinishIfWait[i + 1]);
    }
  }

  return suffixMinFinishIfWait;
}

function upperBound(values: number[], target: number): number {
  let left = 0;
  let right = values.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (values[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

type Ride = {
  start: number;
  duration: number;
};
