export class MountainArray {
  constructor(private arr: number[]) {}
  get(index: number) {
    return this.arr[index];
  }

  length() {
    return this.arr.length;
  }
}
