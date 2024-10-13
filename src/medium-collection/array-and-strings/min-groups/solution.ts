export function minGroups(intervals: number[][]): number {
  let events: [number, number][] = [];
  for (const [start, end] of intervals) {
    events.push([start, +1]);
    events.push([end, -1]);
  }

  // start events (+1) before end events (-1) at the same time
  events.sort(([timeA, deltaA], [timeB, deltaB]) => (timeA === timeB ? deltaB - deltaA : timeA - timeB));

  let result = 0;
  let active = 0;
  for (const [time, delta] of events) {
    active += delta;
    result = Math.max(result, active);
  }

  return result;
}
