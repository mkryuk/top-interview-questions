export function resultArray(nums: number[], k: number, queries: number[][]): number[] {
  const tree = new SegmentTree(nums, k);
  const result: number[] = [];

  for (const [index, value, start, x] of queries) {
    tree.update(index, value);
    const node = tree.query(start, nums.length - 1);
    result.push(node.count[x]);
  }

  return result;
}

interface Node {
  product: number;
  count: number[];
}

class SegmentTree {
  private readonly n: number;
  private readonly k: number;
  private readonly tree: Node[];

  constructor(nums: number[], k: number) {
    this.n = nums.length;
    this.k = k;
    this.tree = new Array<Node>(this.n * 4);
    this.build(1, 0, this.n - 1, nums);
  }

  public update(index: number, value: number): void {
    this.updateNode(1, 0, this.n - 1, index, value % this.k);
  }

  public query(left: number, right: number): Node {
    return this.queryNode(1, 0, this.n - 1, left, right);
  }

  private createLeaf(value: number): Node {
    const remainder = value % this.k;
    const count = new Array<number>(this.k).fill(0);
    count[remainder] = 1;

    return {
      product: remainder,
      count,
    };
  }

  private merge(left: Node, right: Node): Node {
    const count = left.count.slice();

    // every prefix that enters the right segment
    // contains the entire left segment
    for (let remainder = 0; remainder < this.k; remainder++) {
      const newRemainder = (left.product * remainder) % this.k;
      count[newRemainder] += right.count[remainder];
    }

    return {
      product: (left.product * right.product) % this.k,
      count,
    };
  }

  private build(node: number, left: number, right: number, nums: number[]): void {
    if (left === right) {
      this.tree[node] = this.createLeaf(nums[left]);
      return;
    }

    const mid = Math.floor((left + right) / 2);
    this.build(node * 2, left, mid, nums);
    this.build(node * 2 + 1, mid + 1, right, nums);
    this.tree[node] = this.merge(this.tree[node * 2], this.tree[node * 2 + 1]);
  }

  private updateNode(node: number, left: number, right: number, index: number, value: number): void {
    if (left === right) {
      this.tree[node] = this.createLeaf(value);
      return;
    }

    const mid = Math.floor((left + right) / 2);
    if (index <= mid) {
      this.updateNode(node * 2, left, mid, index, value);
    } else {
      this.updateNode(node * 2 + 1, mid + 1, right, index, value);
    }

    this.tree[node] = this.merge(this.tree[node * 2], this.tree[node * 2 + 1]);
  }

  private queryNode(node: number, left: number, right: number, queryLeft: number, queryRight: number): Node {
    if (queryLeft <= left && right <= queryRight) {
      return this.tree[node];
    }

    const mid = Math.floor((left + right) / 2);
    if (queryRight <= mid) {
      return this.queryNode(node * 2, left, mid, queryLeft, queryRight);
    }

    if (queryLeft > mid) {
      return this.queryNode(node * 2 + 1, mid + 1, right, queryLeft, queryRight);
    }

    const leftResult = this.queryNode(node * 2, left, mid, queryLeft, queryRight);
    const rightResult = this.queryNode(node * 2 + 1, mid + 1, right, queryLeft, queryRight);
    return this.merge(leftResult, rightResult);
  }
}
