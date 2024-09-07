export function insert(intervals: number[][], newInterval: number[]): number[][] {
  let result: number[][] = [];

  let i = 0;
  // Add all intervals ending before newInterval starts
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge all overlapping intervals to one considering newInterval
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }
  result.push(newInterval);

  // Add all the rest
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
