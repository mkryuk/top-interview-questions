const MOD = BigInt(1e9 + 7);

export function sumCounts(nums: number[]): number {
  const n = nums.length;
  const tree = new SegmentTree(n);

  // nums[i] <= 1e5, so an array is enough
  const lastPosition = new Array<number>(100_001).fill(-1);

  let result = 0n;
  for (let right = 0; right < n; right++) {
    const value = nums[right];
    const previous = lastPosition[value];
    // value is newly distinct for starts in [previous + 1, right]
    tree.add(previous + 1, right, 1n);
    result = (result + tree.getSumSquares()) % MOD;
    lastPosition[value] = right;
  }

  return Number(result);
}

class SegmentTree {
  private sum: bigint[];
  private sumSquares: bigint[];
  private lazy: bigint[];
  private n: number;

  constructor(n: number) {
    this.n = n;
    const size = n * 4;
    this.sum = new Array<bigint>(size).fill(0n);
    this.sumSquares = new Array<bigint>(size).fill(0n);
    this.lazy = new Array<bigint>(size).fill(0n);
  }

  private apply(node: number, left: number, right: number, value: bigint): void {
    const length = BigInt(right - left + 1);

    // (x + value)^2 = x^2 + 2 * value * x + value^2
    this.sumSquares[node] = (this.sumSquares[node] + 2n * value * this.sum[node] + value * value * length) % MOD;
    this.sum[node] = (this.sum[node] + value * length) % MOD;
    this.lazy[node] = (this.lazy[node] + value) % MOD;
  }

  private push(node: number, left: number, right: number): void {
    if (this.lazy[node] === 0n || left === right) {
      return;
    }

    const mid = Math.floor((left + right) / 2);
    const value = this.lazy[node];

    this.apply(node * 2, left, mid, value);
    this.apply(node * 2 + 1, mid + 1, right, value);

    this.lazy[node] = 0n;
  }

  private update(
    node: number,
    left: number,
    right: number,
    queryLeft: number,
    queryRight: number,
    value: bigint,
  ): void {
    if (queryLeft <= left && right <= queryRight) {
      this.apply(node, left, right, value);
      return;
    }

    this.push(node, left, right);

    const mid = Math.floor((left + right) / 2);

    if (queryLeft <= mid) {
      this.update(node * 2, left, mid, queryLeft, queryRight, value);
    }

    if (queryRight > mid) {
      this.update(node * 2 + 1, mid + 1, right, queryLeft, queryRight, value);
    }

    this.sum[node] = (this.sum[node * 2] + this.sum[node * 2 + 1]) % MOD;

    this.sumSquares[node] = (this.sumSquares[node * 2] + this.sumSquares[node * 2 + 1]) % MOD;
  }

  public add(left: number, right: number, value: bigint): void {
    if (left > right) {
      return;
    }

    this.update(1, 0, this.n - 1, left, right, value);
  }

  public getSumSquares(): bigint {
    return this.sumSquares[1];
  }
}
