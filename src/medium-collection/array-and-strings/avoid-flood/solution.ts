export function avoidFlood(rains: number[]): number[] {
  // ans[i] = -1 for rain days, or the lake number to dry on dry days
  const n: number = rains.length;
  const ans: number[] = new Array(n);

  // lastRainOfLake maps lake - лlast day it rained on that lake
  const lastRainOfLake: Map<number, number> = new Map();

  // dryDays is a sorted list of indices where rains[i] == 0 (dry opportunities)
  const dryDays: number[] = [];

  // initialize ans with placeholder for dry days; we'll fill later
  for (let i = 0; i < n; i += 1) {
    if (rains[i] === 0) {
      // choose a default lake for now; may be overwritten if needed to prevent flood
      ans[i] = 1;
    } else {
      ans[i] = -1;
    }
  }

  // iterate through days to assign drying when necessary
  for (let day = 0; day < n; day += 1) {
    const lake: number = rains[day];

    if (lake === 0) {
      // record this as a candidate dry day
      insertDryDay(dryDays, day);
    } else {
      // it rains on 'lake' today
      if (lastRainOfLake.has(lake)) {
        // we must dry this lake on a dry day after its last rain and before today
        const prevRainDay: number = lastRainOfLake.get(lake)!;

        // find the earliest dry day strictly after prevRainDay
        const pos: number = upperBound(dryDays, prevRainDay);

        if (pos === dryDays.length) {
          // no available dry day to prevent flood
          return [];
        }

        // assign that dry day to dry this lake
        const chosenDryDay: number = dryDays[pos];
        ans[chosenDryDay] = lake;

        // remove the used dry day from the list
        dryDays.splice(pos, 1);
      }

      // update last rain day for this lake
      lastRainOfLake.set(lake, day);
    }
  }

  // any unused dry days can dry any arbitrary lake (problem allows any)
  // they've already been set to 1 above, which is acceptable

  return ans;
}

function upperBound(arr: number[], target: number): number {
  let lo: number = 0;
  let hi: number = arr.length;
  while (lo < hi) {
    const mid: number = lo + ((hi - lo) >> 1);
    if (arr[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return lo;
}

function insertDryDay(dryDays: number[], day: number): void {
  const pos: number = upperBound(dryDays, day);
  dryDays.splice(pos, 0, day);
}
