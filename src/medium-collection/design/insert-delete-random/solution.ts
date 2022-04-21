export class RandomizedSet {
  arr: number[] = [];
  valIdx = new Map();
  constructor() {}

  insert(val: number): boolean {
    if (this.valIdx.has(val)) {
      return false;
    }
    this.valIdx.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.valIdx.has(val)) {
      return false;
    }
    const idx = this.valIdx.get(val);
    const lastItem = this.arr[this.arr.length - 1];
    this.arr[idx] = lastItem;
    this.valIdx.set(lastItem, idx);
    this.arr.pop();
    this.valIdx.delete(val);
    return true;
  }

  getRandom(): number {
    const rndIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[rndIdx];
  }
}
