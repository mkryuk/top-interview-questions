export function removeCoveredIntervals(intervals: number[][]): number {
  // Sort intervals by their start points, then by end points in descending order
  intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let result = 0;
  let end = 0; // Keep track of the maximum end point so far

  for (let i = 0; i < intervals.length; i++) {
    // If the end point of the current interval is greater than the maximum so far,
    // then this interval is not covered by any previous one
    if (intervals[i][1] > end) {
      result++;
      end = intervals[i][1];
    }
  }

  return result;
}
