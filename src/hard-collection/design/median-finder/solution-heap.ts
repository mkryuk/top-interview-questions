import { Heap } from "../heap/heap";

export class MedianFinder {
  lo: Heap<number>;
  hi: Heap<number>;
  constructor() {
    this.lo = new Heap<number>((left, right) => left - right);
    this.hi = new Heap<number>((left, right) => right - left);
  }
  addNum(num: number): void {
    this.lo.push(num); // Add to max heap

    this.hi.push(this.lo.top()!); // balancing step
    this.lo.pop();

    if (this.lo.size() < this.hi.size()) {
      // maintain size property
      this.lo.push(this.hi.top()!);
      this.hi.pop();
    }
  }

  findMedian(): number {
    return this.lo.size() > this.hi.size()
      ? this.lo.top()!
      : (this.lo.top()! + this.hi.top()!) * 0.5;
  }
}
