import { Heap } from "../../../hard-collection/design/heap/heap";

export function smallestChair(times: number[][], targetFriend: number): number {
  // track seat indexes
  let available = new Heap<number>((a, b) => a - b);
  // track [leavingTime, chairNumber] for occupied chairs
  let occupied = new Heap<[number, number]>((a, b) => a[0] - b[0]);
  // [arrival, leaving, index];
  let events = times.map(([arrival, leaving], index) => [arrival, leaving, index]);
  // sort by arrival
  events.sort((a, b) => a[0] - b[0]);
  const n = times.length;
  for (let i = 0; i < n; i++) {
    available.push(i);
  }

  for (const [arrival, leaving, index] of events) {
    while (occupied.size() > 0 && occupied.root()![0] <= arrival) {
      const [_, chairNumber] = occupied.pop()!;
      available.push(chairNumber);
    }

    const chairNumber = available.pop()!;
    occupied.push([leaving, chairNumber]);

    if (index === targetFriend) {
      return chairNumber;
    }
  }

  return -1;
}
