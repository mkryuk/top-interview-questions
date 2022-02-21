// The main thing is that we go through the timeline
// and if we have started meeting, we increase the amount of the meeting rooms
// when the meeting ends we decrease the meeting rooms needed
export function minMeetingRooms(intervals: number[][]): number {
  const sortedStarts = intervals.sort((a, b) => a[0] - b[0]).map((a) => a[0]);
  const sortedEnds = intervals.sort((a, b) => a[1] - b[1]).map((a) => a[1]);
  let minMeetingRooms = 1;
  let start = sortedStarts.shift();
  let end = sortedEnds.shift();
  let meetingRooms = 0;
  while (sortedStarts.length && sortedEnds.length) {
    while (start !== undefined && end !== undefined && start < end) {
      start = sortedStarts.shift();
      meetingRooms++;
    }
    end = sortedEnds.shift();
    minMeetingRooms = Math.max(minMeetingRooms, meetingRooms);
    meetingRooms--;
  }
  return minMeetingRooms;
}
