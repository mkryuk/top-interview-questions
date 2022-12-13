export class NumArray {
  sums: number[] = [];
  constructor(nums: number[]) {
    this.sums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
      this.sums.push(nums[i] + this.sums[i - 1]);
    }
  }

  sumRange(left: number, right: number): number {
    return this.sums[right] - (left > 0 ? this.sums[left - 1] : 0);
  }
}
