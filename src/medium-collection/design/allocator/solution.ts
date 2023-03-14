export class Allocator {
  occupied: Map<number, number[][]>;

  mArr: number[];
  constructor(n: number) {
    this.occupied = new Map();
    this.mArr = new Array(n).fill(0);
  }

  allocate(size: number, mID: number): number {
    let index = this.findIndex(size);
    if (index === -1) {
      return index;
    }
    for (let i = index; i < index + size; i++) {
      this.mArr[i] = mID;
    }
    if (this.occupied.has(mID)) {
      this.occupied.get(mID)?.push([index, index + size]);
    } else {
      this.occupied.set(mID, [[index, index + size]]);
    }
    return index;
  }

  free(mID: number): number {
    let ranges = this.occupied.get(mID);
    let count = 0;
    ranges?.forEach(([start, to]) => {
      for (let i = start; i < to; i++) {
        this.mArr[i] = 0;
        count++;
      }
    });
    this.occupied.delete(mID);
    return count;
  }

  private findIndex(size: number): number {
    let count = 0;
    let idx = 0;
    for (let i = 0; i < this.mArr.length; i++) {
      if (this.mArr[i] === 0) {
        count++;
      } else {
        idx = i + 1;
        count = 0;
      }
      if (count === size) {
        return idx;
      }
    }
    return -1;
  }
}
