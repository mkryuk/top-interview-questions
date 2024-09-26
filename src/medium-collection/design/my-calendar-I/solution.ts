export class MyCalendar {
  events: [number, number][];
  constructor() {
    this.events = [];
  }

  book(start: number, end: number): boolean {
    for (const [s, e] of this.events) {
      if (Math.max(start, s) < Math.min(end, e)) {
        return false;
      }
    }
    this.events.push([start, end]);
    return true;
  }
}
