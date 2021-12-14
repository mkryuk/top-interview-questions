export class Solution {
  private original: number[];
  constructor(nums: number[]) {
    this.original = [...nums];
  }

  reset(): number[] {
    return [...this.original];
  }

  shuffle(): number[] {
    const shuffled = [...this.original];
    for (let i = 0; i < shuffled.length; i++) {
      const ri = Math.floor(Math.random() * (shuffled.length - i) + i);
      [shuffled[i], shuffled[ri]] = [shuffled[ri], shuffled[i]];
    }
    return shuffled;
  }
}
