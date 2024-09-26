export class MyCalendar {
  events: [number, number][];
  constructor() {
    this.events = [];
  }

  book(start: number, end: number): boolean {
    let left = 0;
    let right = this.events.length - 1;
    while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      const [mStart, mEnd] = this.events[mid];
      if (end <= mStart) {
        right = mid - 1;
      } else if (start >= mEnd) {
        left = mid + 1;
      } else {
        return false;
      }
    }
    this.events.splice(left, 0, [start, end]);
    return true;
  }
}
