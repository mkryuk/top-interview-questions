export class KthLargest {
  kIndex: number;
  nums: number[];
  constructor(k: number, nums: number[]) {
    this.kIndex = k - 1;
    this.nums = nums;
  }

  add(val: number): number {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    return this.nums[this.kIndex];
  }
}
