export function countDays(days: number, meetings: number[][]): number {
  meetings.sort((a, b) => a[0] - b[0]);
  const mergedMeetings: number[][] = [];
  // merge all overlapping meetings
  for (const [start, end] of meetings) {
    const lastIndex = mergedMeetings.length;
    if (lastIndex === 0 || start > mergedMeetings[lastIndex - 1][1]) {
      mergedMeetings.push([start, end]);
    } else {
      mergedMeetings[lastIndex - 1][1] = Math.max(end, mergedMeetings[lastIndex - 1][1]);
    }
  }

  let prevMeetingEnd = 0;
  let result = 0;
  for (const [start, end] of mergedMeetings) {
    // calculate days between meetings
    result += start - (prevMeetingEnd + 1);
    prevMeetingEnd = end;
  }
  result += days - mergedMeetings[mergedMeetings.length - 1][1];
  return result;
}
