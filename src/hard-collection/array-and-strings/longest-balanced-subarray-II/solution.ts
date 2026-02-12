class SegmentTree {
  private readonly n: number;
  private readonly min: Int32Array;
  private readonly max: Int32Array;
  private readonly lazy: Int32Array;

  constructor(n: number) {
    this.n = n;
    this.min = new Int32Array(4 * n);
    this.max = new Int32Array(4 * n);
    this.lazy = new Int32Array(4 * n);
  }

  private push(node: number): void {
    const delta = this.lazy[node];
    if (delta === 0) {
      return;
    }
    const left = node * 2;
    const right = left + 1;
    this.min[left] += delta;
    this.max[left] += delta;
    this.lazy[left] += delta;
    this.min[right] += delta;
    this.max[right] += delta;
    this.lazy[right] += delta;
    this.lazy[node] = 0;
  }

  private updateRange(
    node: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number,
    delta: number,
  ): void {
    if (queryRight < left || right < queryLeft) {
      return;
    }
    if (queryLeft <= left && right <= queryRight) {
      this.min[node] += delta;
      this.max[node] += delta;
      this.lazy[node] += delta;
      return;
    }
    this.push(node);
    const mid = (left + right) >> 1;
    this.updateRange(node * 2, left, mid, queryLeft, queryRight, delta);
    this.updateRange(node * 2 + 1, mid + 1, right, queryLeft, queryRight, delta);
    this.min[node] = Math.min(this.min[node * 2], this.min[node * 2 + 1]);
    this.max[node] = Math.max(this.max[node * 2], this.max[node * 2 + 1]);
  }

  add(left: number, right: number, delta: number): void {
    if (left > right) {
      return;
    }
    this.updateRange(1, 0, this.n - 1, left, right, delta);
  }

  private firstZeroInRange(node: number, left: number, right: number, queryLeft: number, queryRight: number): number {
    if (queryRight < left || right < queryLeft) {
      return -1;
    }
    // if the whole segment is strictly positive or strictly negative, zero is impossible here.
    if (this.min[node] > 0 || this.max[node] < 0) {
      return -1;
    }
    if (left === right) {
      return left;
    }
    this.push(node);
    const mid = (left + right) >> 1;
    const leftResult = this.firstZeroInRange(node * 2, left, mid, queryLeft, queryRight);
    if (leftResult !== -1) {
      return leftResult;
    }
    return this.firstZeroInRange(node * 2 + 1, mid + 1, right, queryLeft, queryRight);
  }

  firstZero(left: number, right: number): number {
    if (left > right) {
      return -1;
    }
    return this.firstZeroInRange(1, 0, this.n - 1, left, right);
  }
}

export function longestBalanced(nums: number[]): number {
  const n = nums.length;
  const tree = new SegmentTree(n);
  // input constraint: nums[i] <= 1e5.
  const lastPosition = new Int32Array(100001);
  let best = 0;

  for (let i = 0; i < n; i++) {
    const value = nums[i];
    // +1 means one distinct even, -1 means one distinct odd.
    const sign = value % 2 === 0 ? 1 : -1;
    const previousIndex = lastPosition[value] - 1;
    // this value contributes to distinct parity only for starts after its previous occurrence.
    const updateLeft = previousIndex + 1;

    tree.add(updateLeft, i, sign);
    lastPosition[value] = i + 1;

    // earliest start with balance 0 gives the longest balanced subarray ending at i.
    const firstBalancedStart = tree.firstZero(0, i);
    if (firstBalancedStart !== -1) {
      best = Math.max(best, i - firstBalancedStart + 1);
    }
  }

  return best;
}
