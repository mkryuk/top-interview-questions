export function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort(([startA, endA], [startB, endB]) => endA - endB);
  let k = Number.MIN_SAFE_INTEGER;
  let result = 0;
  // Sort intervals by finish times.
  // Consider two intervals with earliest finish times: x (earliest) and y (later).
  // If we can only keep one, choose x to avoid overlaps.
  // Denote the selected interval's finish time as k.
  // The next selected interval should start at a time >= k.
  // Having a larger value for k will never provide more options than a smaller value of k.
  // So, prefer x over y, given x < y.
  intervals.forEach(([start, end]) => {
    if (start >= k) {
      k = end;
    } else {
      result++;
    }
  });
  return result;
}
