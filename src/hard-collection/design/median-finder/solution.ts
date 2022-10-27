export class MedianFinder {
  numbers: number[];
  constructor() {
    this.numbers = [];
  }
  addNum(num: number): void {
    const index = this.findIndex(this.numbers, num);
    this.numbers.splice(index, 0, num);
  }

  findMedian(): number {
    const midIndex = Math.trunc(this.numbers.length / 2);
    return this.numbers.length % 2 === 0
      ? (this.numbers[midIndex - 1] + this.numbers[midIndex]) / 2
      : this.numbers[midIndex];
  }

  private findIndex(array: number[], value: number): number {
    let left = 0;
    let right = array.length;
    while (left < right) {
      let mid = left + Math.trunc((right - left) / 2);
      if (array[mid] < value) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
}
