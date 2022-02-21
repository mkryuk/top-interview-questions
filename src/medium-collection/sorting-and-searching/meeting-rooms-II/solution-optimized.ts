export function minMeetingRooms(intervals: number[][]): number {
  const sortedStarts = intervals.sort((a, b) => a[0] - b[0]).map((a) => a[0]);
  const sortedEnds = intervals.sort((a, b) => a[1] - b[1]).map((a) => a[1]);
  let minMeetingRooms = 0;
  for (let sIdx = 0, eIdx = 0; sIdx < sortedStarts.length; sIdx++) {
    if (sortedStarts[sIdx] < sortedEnds[eIdx]) {
      minMeetingRooms++;
    } else {
      eIdx++;
    }
  }
  return minMeetingRooms;
}
