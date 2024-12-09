export function maxTwoEvents(events: number[][]): number {
  const times: number[][] = [];
  for (const [start, end, value] of events) {
    times.push([start, 1, value]);
    times.push([end + 1, 0, value]);
  }

  times.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let result = 0;
  let maxValue = 0;
  for (const [time, type, value] of times) {
    // if this is the start time
    if (type === 1) {
      result = Math.max(result, value + maxValue);
    } else {
      maxValue = Math.max(maxValue, value);
    }
  }
  return result;
}
