export function countDays(days: number, meetings: number[][]): number {
  const startEnd = new Map<number, number>();
  for (const [start, end] of meetings) {
    if (!startEnd.has(start)) {
      startEnd.set(start, 0);
    }
    if (!startEnd.has(end + 1)) {
      startEnd.set(end + 1, 0);
    }
    startEnd.set(start, startEnd.get(start)! + 1);
    startEnd.set(end + 1, startEnd.get(end + 1)! - 1);
  }
  let currentMeeting = 0;
  let result = 0;
  for (let i = 1; i <= days; i++) {
    if (startEnd.has(i)) {
      currentMeeting += startEnd.get(i)!;
    }
    if (currentMeeting === 0) {
      result++;
    }
  }
  return result;
}
