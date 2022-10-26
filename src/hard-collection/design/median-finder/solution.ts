export class MedianFinder {
  numbers: number[];
  constructor() {
    this.numbers = [];
  }
  addNum(num: number): void {
    const index = this.findIndex(this.numbers, num);
    this.numbers = this.insertValue(this.numbers, num, index);
  }

  findMedian(): number {
    if (this.numbers.length % 2 === 0) {
      const midIndex = this.numbers.length / 2;
      const left = this.numbers[midIndex - 1];
      const right = this.numbers[midIndex];
      return (left + right) / 2;
    }
    const midIndex = Math.trunc(this.numbers.length / 2);
    return this.numbers[midIndex];
  }

  findIndex(array: number[], value: number): number {
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

  insertValue(array: number[], value: number, index: number): number[] {
    const newNumbers: number[] = [];
    for (let i = 0; i < index; i++) {
      newNumbers.push(array[i]);
    }
    newNumbers.push(value);
    for (let i = index; i < array.length; i++) {
      newNumbers.push(array[i]);
    }
    return newNumbers;
  }
}
