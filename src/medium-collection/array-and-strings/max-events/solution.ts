import { Heap } from "../../../hard-collection/design/heap/heap";

export function maxEvents(events: number[][]): number {
  events.sort((a, b) => a[0] - b[0]);

  const pq = new Heap<number>((a, b) => a - b);
  let day = 0;
  let i = 0;
  let result = 0;
  const n = events.length;

  while (i < n || !pq.isEmpty()) {
    // if no available event, fast-forward to next event's start
    if (pq.isEmpty() && i < n) {
      day = Math.max(day, events[i][0]);
    }

    // push all events that have started by 'day'
    while (i < n && events[i][0] <= day) {
      pq.push(events[i][1]);
      i++;
    }

    // attend the event that ends the soonest
    const earliestEnd = pq.pop();
    if (earliestEnd !== null) {
      result++;
      day++;
    }

    // discard all events that have already expired
    while (!pq.isEmpty() && (pq.top() as number) < day) {
      pq.pop();
    }
  }

  return result;
}
