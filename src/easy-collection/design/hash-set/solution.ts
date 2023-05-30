export class MyHashSet {
  hashSet: number[] = [];
  constructor() {}

  add(key: number): void {
    this.hashSet[key] = 1;
  }

  remove(key: number): void {
    delete this.hashSet[key];
  }

  contains(key: number): boolean {
    return this.hashSet[key] === 1;
  }
}
