export function checkValidCuts(n: number, rectangles: number[][]): boolean {
  const horizontalIntervals = rectangles.map((rect) => ({
    lo: rect[0],
    hi: rect[2],
  }));
  const verticalIntervals = rectangles.map((rect) => ({
    lo: rect[1],
    hi: rect[3],
  }));
  return canPartition(horizontalIntervals) || canPartition(verticalIntervals);
}

function canPartition(intervals: { lo: number; hi: number }[]): boolean {
  intervals.sort((a, b) => a.lo - b.lo);
  let gapCount = 0;
  // initialize furthestEnd with the end of the first interval.
  let furthestEnd = intervals[0].hi;
  for (let i = 1; i < intervals.length; i++) {
    // if the current interval starts at or after furthestEnd,
    // we've found a gap between clusters.
    if (intervals[i].lo >= furthestEnd) {
      gapCount++;
      furthestEnd = intervals[i].hi;
    } else {
      furthestEnd = Math.max(furthestEnd, intervals[i].hi);
    }
  }
  return gapCount >= 2;
}
