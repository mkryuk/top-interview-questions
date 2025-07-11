export function maxFreeTime(eventTime: number, startTime: number[], endTime: number[]): number {
  const n = startTime.length;

  // compute gaps between meetings (and before/after)
  const gaps = new Array<number>(n + 1);
  gaps[0] = startTime[0];
  for (let i = 1; i < n; i++) {
    gaps[i] = startTime[i] - endTime[i - 1];
  }
  gaps[n] = eventTime - endTime[n - 1];

  // find the top 4 largest gaps (value and index)
  const topVal = [-1, -1, -1, -1];
  const topIdx = [-1, -1, -1, -1];
  for (let j = 0; j <= n; j++) {
    const v = gaps[j];
    for (let k = 0; k < 4; k++) {
      if (v > topVal[k]) {
        for (let t = 3; t > k; t--) {
          topVal[t] = topVal[t - 1];
          topIdx[t] = topIdx[t - 1];
        }
        topVal[k] = v;
        topIdx[k] = j;
        break;
      }
    }
  }

  let result = 0;
  // try removing each meeting i
  for (let i = 0; i < n; i++) {
    const d = endTime[i] - startTime[i];

    // find the two largest original gaps excluding gaps[i] and gaps[i+1]
    let origMax1 = 0;
    let origMax2 = 0;
    let found = 0;
    for (let k = 0; k < 4; k++) {
      const idx = topIdx[k];
      if (idx !== i && idx !== i + 1 && idx >= 0) {
        if (found === 0) {
          origMax1 = topVal[k];
          found = 1;
        } else {
          origMax2 = topVal[k];
          break;
        }
      }
    }

    // merged gap when meeting i is removed
    const merged = gaps[i] + d + gaps[i + 1];

    // if there is any other gap >= d, we can place the meeting elsewhere;
    // otherwise we must split the merged gap by d
    const bestAfterRemoval = origMax1 >= d ? Math.max(origMax1, merged) : Math.max(origMax1, merged - d);

    result = Math.max(result, bestAfterRemoval);
  }

  return result;
}
