export function getResults(queries: number[][]): boolean[] {
  const maxCoordinate = getMaxCoordinate(queries);
  const obstacles = new FenwickTree(maxCoordinate);
  const gaps = new SegmentTree(maxCoordinate);

  const results: boolean[] = [];

  for (const query of queries) {
    const type = query[0];
    if (type === 1) {
      const x = query[1];
      addObstacle(x, obstacles, gaps);
    } else {
      const x = query[1];
      const size = query[2];
      const canPlace = canPlaceBlock(x, size, obstacles, gaps);
      results.push(canPlace);
    }
  }

  return results;
}

function addObstacle(x: number, obstacles: FenwickTree, gaps: SegmentTree): void {
  const previous = obstacles.getPreviousOrZero(x);
  const next = obstacles.getNextOrMinusOne(x);

  // add gap that ends at the new obstacle
  gaps.update(x, x - previous);

  // if there is a next obstacle, its previous obstacle changes
  if (next !== -1) {
    gaps.update(next, next - x);
  }

  obstacles.add(x, 1);
}

function canPlaceBlock(x: number, size: number, obstacles: FenwickTree, gaps: SegmentTree): boolean {
  const previous = obstacles.getPreviousOrZero(x);

  // best complete gap that ends at an obstacle <= x
  const bestClosedGap = gaps.query(1, x);

  // gap from the last obstacle before x to x itself
  const tailGap = x - previous;

  return Math.max(bestClosedGap, tailGap) >= size;
}

function getMaxCoordinate(queries: number[][]): number {
  let maxCoordinate = 0;

  for (const query of queries) {
    maxCoordinate = Math.max(maxCoordinate, query[1]);
  }

  return maxCoordinate;
}

class FenwickTree {
  private readonly tree: number[];
  private readonly size: number;

  public constructor(size: number) {
    this.size = size;
    this.tree = new Array(size + 1).fill(0);
  }

  public add(index: number, delta: number): void {
    while (index <= this.size) {
      this.tree[index] += delta;
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

  public getPreviousOrZero(x: number): number {
    const count = this.sum(x);

    if (count === 0) {
      return 0;
    }

    return this.findByOrder(count);
  }

  public getNextOrMinusOne(x: number): number {
    const countBeforeOrAtX = this.sum(x);
    const total = this.sum(this.size);

    if (countBeforeOrAtX === total) {
      return -1;
    }

    return this.findByOrder(countBeforeOrAtX + 1);
  }

  private findByOrder(order: number): number {
    let index = 0;
    let bitMask = 1;

    while (bitMask * 2 <= this.size) {
      bitMask *= 2;
    }

    while (bitMask > 0) {
      const nextIndex = index + bitMask;

      if (nextIndex <= this.size && this.tree[nextIndex] < order) {
        index = nextIndex;
        order -= this.tree[nextIndex];
      }

      bitMask >>= 1;
    }

    return index + 1;
  }
}

class SegmentTree {
  private readonly tree: number[];
  private readonly size: number;

  public constructor(size: number) {
    this.size = size;
    this.tree = new Array(size * 4 + 5).fill(0);
  }

  public update(index: number, value: number): void {
    this.updateRecursive(1, 1, this.size, index, value);
  }

  public query(left: number, right: number): number {
    if (left > right) {
      return 0;
    }

    return this.queryRecursive(1, 1, this.size, left, right);
  }

  private updateRecursive(node: number, nodeLeft: number, nodeRight: number, index: number, value: number): void {
    if (nodeLeft === nodeRight) {
      this.tree[node] = value;
      return;
    }

    const middle = Math.floor((nodeLeft + nodeRight) / 2);

    if (index <= middle) {
      this.updateRecursive(node * 2, nodeLeft, middle, index, value);
    } else {
      this.updateRecursive(node * 2 + 1, middle + 1, nodeRight, index, value);
    }

    this.tree[node] = Math.max(this.tree[node * 2], this.tree[node * 2 + 1]);
  }

  private queryRecursive(
    node: number,
    nodeLeft: number,
    nodeRight: number,
    queryLeft: number,
    queryRight: number,
  ): number {
    if (queryLeft <= nodeLeft && nodeRight <= queryRight) {
      return this.tree[node];
    }

    if (nodeRight < queryLeft || queryRight < nodeLeft) {
      return 0;
    }

    const middle = Math.floor((nodeLeft + nodeRight) / 2);
    const leftResult = this.queryRecursive(node * 2, nodeLeft, middle, queryLeft, queryRight);
    const rightResult = this.queryRecursive(node * 2 + 1, middle + 1, nodeRight, queryLeft, queryRight);

    return Math.max(leftResult, rightResult);
  }
}
