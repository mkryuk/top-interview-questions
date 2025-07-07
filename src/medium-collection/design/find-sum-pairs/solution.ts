export class FindSumPairs {
  private readonly nums1: number[];
  private nums2: number[];
  private freq: Map<number, number>;

  constructor(nums1: number[], nums2: number[]) {
    this.nums1 = nums1;
    this.nums2 = nums2;
    this.freq = new Map<number, number>();

    for (const n of nums2) {
      this.freq.set(n, (this.freq.get(n) ?? 0) + 1);
    }
  }

  add(index: number, val: number): void {
    const oldVal = this.nums2[index];
    const oldCnt = (this.freq.get(oldVal) ?? 0) - 1;
    if (oldCnt === 0) {
      this.freq.delete(oldVal);
    } else {
      this.freq.set(oldVal, oldCnt);
    }
    const newVal = oldVal + val;
    this.nums2[index] = newVal;
    this.freq.set(newVal, (this.freq.get(newVal) ?? 0) + 1);
  }

  count(tot: number): number {
    let res = 0;
    for (const num of this.nums1) {
      const need = tot - num;
      res += this.freq.get(need) ?? 0;
    }
    return res;
  }
}
