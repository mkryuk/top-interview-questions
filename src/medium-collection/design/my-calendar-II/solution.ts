export class MyCalendarTwo {
  booked: [number, number][];
  overlaps: [number, number][];
  constructor() {
    this.booked = [];
    this.overlaps = [];
  }

  book(start: number, end: number): boolean {
    for (const [s, e] of this.overlaps) {
      if (Math.max(start, s) < Math.min(end, e)) {
        return false;
      }
    }

    for (const [s, e] of this.booked) {
      if (Math.max(start, s) < Math.min(end, e)) {
        this.overlaps.push([Math.max(start, s), Math.min(end, e)]);
      }
    }
    this.booked.push([start, end]);
    return true;
  }
}
