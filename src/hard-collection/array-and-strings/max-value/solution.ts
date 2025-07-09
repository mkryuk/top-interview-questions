export function maxValue(events: number[][], k: number): number {
  // sort events by start day
  events.sort((a, b) => a[0] - b[0]);

  const n = events.length;
  const starts = events.map((e) => e[0]);

  // precompute next non-overlapping event index
  const nextIndex = new Array<number>(n).fill(n);
  for (let i = 0; i < n; i++) {
    const endDay = events[i][1];
    let lo = i + 1;
    let hi = n;
    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (starts[mid] > endDay) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    nextIndex[i] = lo;
  }

  // dp arrays for up to k events
  let prev = new Array<number>(n + 1).fill(0);
  let curr = new Array<number>(n + 1).fill(0);

  for (let attend = 1; attend <= k; attend++) {
    for (let i = n - 1; i >= 0; i--) {
      const take = events[i][2] + prev[nextIndex[i]];
      const skip = curr[i + 1];
      curr[i] = Math.max(skip, take);
    }
    [prev, curr] = [curr, prev];
  }

  return prev[0];
}
