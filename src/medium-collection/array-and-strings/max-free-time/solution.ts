export function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
  const n = startTime.length;

  // compute gap
  // idx=0: from 0 to first meeting
  // idx=n: from last meeting end to eventTime
  // else:  between meeting idx-1 and idx
  const gapAt = (idx: number): number => {
    if (idx === 0) {
      return startTime[0];
    }
    if (idx === n) {
      return eventTime - endTime[n - 1];
    }
    return startTime[idx] - endTime[idx - 1];
  };

  let windowSum = 0;
  let result = 0;

  // we need a window of size (k+1) over gaps[0..n]
  for (let i = 0; i <= n; i++) {
    // add the new right-hand gap
    windowSum += gapAt(i);

    // once we've added k+2 gaps, drop the oldest (i - (k+1))
    if (i > k) {
      windowSum -= gapAt(i - k - 1);
    }

    result = Math.max(result, windowSum);
  }

  return result;
}
