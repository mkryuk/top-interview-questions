export class Solution {
  hash: Map<number, number[]>;
  constructor(nums: number[]) {
    this.hash = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
      if (!this.hash.has(nums[i])) {
        this.hash.set(nums[i], []);
      }
      this.hash.get(nums[i])!.push(i);
    }
  }

  pick(target: number): number {
    let indexes = this.hash.get(target)!;
    let random = Math.floor(Math.random() * indexes.length);
    return indexes[random];
  }
}
