export function countMajoritySubarrays(nums: number[], target: number): number {
  const n = nums.length;
  const offset = n + 2;
  const size = 2 * n + 5;
  const fenwick = new FenwickTree(size);
  let prefix = 0;
  let result = 0;

  // prefix sum before any element
  fenwick.add(prefix + offset, 1);
  for (const num of nums) {
    if (num === target) {
      prefix += 1;
    } else {
      prefix -= 1;
    }
    // count previous prefix sums strictly smaller than current prefix
    result += fenwick.sum(prefix + offset - 1);
    fenwick.add(prefix + offset, 1);
  }
  return result;
}

class FenwickTree {
  private readonly tree: number[];
  public constructor(size: number) {
    this.tree = new Array<number>(size + 1).fill(0);
  }
  public add(index: number, value: number): void {
    while (index < this.tree.length) {
      this.tree[index] += value;
      index += index & -index;
    }
  }
  public sum(index: number): number {
    let result = 0;
    while (index > 0) {
      result += this.tree[index];
      index -= index & -index;
    }
    return result;
  }
}
