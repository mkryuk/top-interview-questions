import { Heap } from "../../../hard-collection/design/heap/heap";

export class SeatManager {
  heap: Heap<number>;
  constructor(n: number) {
    this.heap = new Heap((left, right) => left - right);
    for (let i = 1; i <= n; i++) {
      this.heap.push(i);
    }
  }

  reserve(): number {
    return this.heap.pop()!;
  }

  unreserve(seatNumber: number): void {
    this.heap.push(seatNumber);
  }
}
