export function mostBooked(n: number, meetings: [number, number][]): number {
  const roomBookCount: number[] = new Array(n).fill(0);
  const roomAvailableTime: number[] = new Array(n).fill(0);
  meetings.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < meetings.length; i++) {
    const [start, end] = meetings[i];
    let roomAvailable = false;
    let minRoomIdx = -1;
    let availableTime = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < n; j++) {
      if (roomAvailableTime[j] < availableTime) {
        availableTime = roomAvailableTime[j];
        minRoomIdx = j;
      }
      if (roomAvailableTime[j] <= start) {
        roomAvailable = true;
        roomBookCount[j]++;
        roomAvailableTime[j] = end;
        break;
      }
    }
    if (!roomAvailable) {
      roomBookCount[minRoomIdx]++;
      roomAvailableTime[minRoomIdx] += end - start;
    }
  }

  let bookedCount = -1;
  let result = -1;
  for (let i = 0; i < n; i++) {
    if (roomBookCount[i] > bookedCount) {
      bookedCount = roomBookCount[i];
      result = i;
    }
  }
  return result;
}
