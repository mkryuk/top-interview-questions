export class NumArray {
  tree: number[] = [];
  nLen: number;
  constructor(nums: number[]) {
    this.nLen = nums.length - 1;
    this.buildSegmentTree(nums, 0, 0, this.nLen);
  }

  update(index: number, val: number): void {
    this.updateValue(0, 0, this.nLen, index, val);
  }

  sumRange(left: number, right: number): number {
    return this.queryValue(0, 0, this.nLen, left, right);
  }

  private buildSegmentTree(
    nums: number[],
    treeIndex: number,
    lo: number,
    hi: number,
  ): void {
    if (lo == hi) {
      // leaf node. store value in node.
      this.tree[treeIndex] = nums[lo];
      return;
    }

    const mid: number = lo + Math.trunc((hi - lo) / 2); // recurse deeper for children.
    this.buildSegmentTree(nums, 2 * treeIndex + 1, lo, mid);
    this.buildSegmentTree(nums, 2 * treeIndex + 2, mid + 1, hi);

    // merge build results
    this.tree[treeIndex] = this.merge(
      this.tree[2 * treeIndex + 1],
      this.tree[2 * treeIndex + 2],
    );
  }

  private queryValue(
    treeIndex: number,
    lo: number,
    hi: number,
    i: number,
    j: number,
  ): number {
    // query for arr[i..j]
    if (lo > j || hi < i) {
      // segment completely outside range
      return 0;
    } // represents a null node

    if (i <= lo && j >= hi) {
      // segment completely inside range
      return this.tree[treeIndex];
    }

    // partial overlap of current segment and queried range. Recurse deeper.
    const mid = lo + Math.trunc((hi - lo) / 2);
    const ti2 = 2 * treeIndex;

    if (i > mid) {
      return this.queryValue(ti2 + 2, mid + 1, hi, i, j);
    } else if (j <= mid) {
      return this.queryValue(ti2 + 1, lo, mid, i, j);
    }

    const leftQuery = this.queryValue(ti2 + 1, lo, mid, i, mid);
    const rightQuery = this.queryValue(ti2 + 2, mid + 1, hi, mid + 1, j);

    // merge query results
    return this.merge(leftQuery, rightQuery);
  }

  private updateValue(
    treeIndex: number,
    lo: number,
    hi: number,
    numIndex: number,
    val: number,
  ) {
    if (lo == hi) {
      // leaf node. update element.
      this.tree[treeIndex] = val;
      return;
    }

    const mid = lo + Math.trunc((hi - lo) / 2); // recurse deeper for appropriate child

    if (numIndex > mid)
      this.updateValue(2 * treeIndex + 2, mid + 1, hi, numIndex, val);
    else if (numIndex <= mid)
      this.updateValue(2 * treeIndex + 1, lo, mid, numIndex, val);

    // merge updates
    this.tree[treeIndex] = this.merge(
      this.tree[2 * treeIndex + 1],
      this.tree[2 * treeIndex + 2],
    );
  }

  private merge(left: number, right: number): number {
    return left + right;
  }
}
