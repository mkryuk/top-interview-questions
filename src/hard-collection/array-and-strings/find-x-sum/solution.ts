export function findXSum(nums: number[], k: number, x: number): number[] {
  const st = createState(x);
  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    insertValue(st, nums[i]);

    if (i >= k) {
      removeValue(st, nums[i - k]);
    }

    if (i >= k - 1) {
      result.push(Number(st.sum));
    }
  }

  return result;
}

class AvlTree<T> {
  private readonly compare: (a: T, b: T) => number;
  private root: AvlNode<T> | null;
  private nodeCount: number;

  constructor(compare: (a: T, b: T) => number) {
    this.compare = compare;
    this.root = null;
    this.nodeCount = 0;
  }

  public insert(value: T): void {
    let created = false;
    this.root = this.insertNode(this.root, value, () => {
      created = true;
    });
    if (created) {
      this.nodeCount += 1;
    }
  }

  public remove(value: T): void {
    let removedNode = false;
    this.root = this.removeOne(this.root, value, () => {
      removedNode = true;
    });
    if (removedNode) {
      this.nodeCount -= 1;
    }
  }

  public has(value: T): boolean {
    return this.findNode(this.root, value) !== null;
  }

  public count(): number {
    return this.nodeCount;
  }

  public min(): AvlNodeWrapper<T> | null {
    const n = this.findMinNode(this.root);
    if (n === null) {
      return null;
    } else {
      return new AvlNodeWrapper<T>(n);
    }
  }

  public max(): AvlNodeWrapper<T> | null {
    const n = this.findMaxNode(this.root);
    if (n === null) {
      return null;
    } else {
      return new AvlNodeWrapper<T>(n);
    }
  }

  private insertNode(node: AvlNode<T> | null, key: T, onCreate: () => void): AvlNode<T> {
    if (node === null) {
      onCreate();
      return new AvlNode<T>(key);
    }

    const cmp = this.compare(key, node.key);
    if (cmp === 0) {
      node.cnt += 1;
      this.updateHeight(node);
      return node;
    } else if (cmp < 0) {
      node.left = this.insertNode(node.left, key, onCreate);
    } else {
      node.right = this.insertNode(node.right, key, onCreate);
    }

    this.updateHeight(node);
    return this.rebalance(node);
  }

  private removeOne(node: AvlNode<T> | null, key: T, onRemoveNode: () => void): AvlNode<T> | null {
    if (node === null) {
      return null;
    }

    const cmp = this.compare(key, node.key);

    if (cmp === 0) {
      if (node.cnt > 1) {
        node.cnt -= 1;
        this.updateHeight(node);
        return node;
      }

      if (node.left === null && node.right === null) {
        onRemoveNode();
        return null;
      }
      if (node.left === null) {
        onRemoveNode();
        return node.right;
      }
      if (node.right === null) {
        onRemoveNode();
        return node.left;
      }

      // two children: copy successor’s key+cnt, then remove successor node
      const succ = this.findMinNode(node.right)!;
      node.key = succ.key;
      node.cnt = succ.cnt;

      let removedSuccNode = false;
      node.right = this.removeWholeNode(node.right, succ.key, () => {
        removedSuccNode = true;
      });
      if (removedSuccNode) {
        onRemoveNode();
      }

      this.updateHeight(node);
      return this.rebalance(node);
    }

    if (cmp < 0) {
      node.left = this.removeOne(node.left, key, onRemoveNode);
    } else {
      node.right = this.removeOne(node.right, key, onRemoveNode);
    }

    this.updateHeight(node);
    return this.rebalance(node);
  }

  private removeWholeNode(node: AvlNode<T> | null, key: T, onRemoveNode: () => void): AvlNode<T> | null {
    if (node === null) {
      return null;
    }

    const cmp = this.compare(key, node.key);
    if (cmp === 0) {
      if (node.left === null && node.right === null) {
        onRemoveNode();
        return null;
      }
      if (node.left === null) {
        onRemoveNode();
        return node.right;
      }
      if (node.right === null) {
        onRemoveNode();
        return node.left;
      }

      const succ = this.findMinNode(node.right)!;
      node.key = succ.key;
      node.cnt = succ.cnt;

      node.right = this.removeWholeNode(node.right, succ.key, onRemoveNode);
      this.updateHeight(node);
      return this.rebalance(node);
    }

    if (cmp < 0) {
      node.left = this.removeWholeNode(node.left, key, onRemoveNode);
    } else {
      node.right = this.removeWholeNode(node.right, key, onRemoveNode);
    }

    this.updateHeight(node);
    return this.rebalance(node);
  }

  private findNode(node: AvlNode<T> | null, key: T): AvlNode<T> | null {
    let cur = node;
    while (cur !== null) {
      const cmp = this.compare(key, cur.key);
      if (cmp === 0) {
        return cur;
      }
      if (cmp < 0) {
        cur = cur.left;
      } else {
        cur = cur.right;
      }
    }
    return null;
  }

  private findMinNode(node: AvlNode<T> | null): AvlNode<T> | null {
    if (node === null) {
      return null;
    }
    let cur = node;
    while (cur.left !== null) {
      cur = cur.left;
    }
    return cur;
  }

  private findMaxNode(node: AvlNode<T> | null): AvlNode<T> | null {
    if (node === null) {
      return null;
    }
    let cur = node;
    while (cur.right !== null) {
      cur = cur.right;
    }
    return cur;
  }

  private height(n: AvlNode<T> | null): number {
    if (n === null) {
      return 0;
    } else {
      return n.h;
    }
  }

  private updateHeight(n: AvlNode<T> | null): void {
    if (n === null) {
      return;
    }
    const hl = this.height(n.left);
    const hr = this.height(n.right);
    n.h = (hl > hr ? hl : hr) + 1;
  }

  private balanceFactor(n: AvlNode<T> | null): number {
    if (n === null) {
      return 0;
    } else {
      return this.height(n.left) - this.height(n.right);
    }
  }

  private rotateRight(y: AvlNode<T>): AvlNode<T> {
    const x = y.left!;
    const t2 = x.right;

    x.right = y;
    y.left = t2;

    this.updateHeight(y);
    this.updateHeight(x);
    return x;
  }

  private rotateLeft(x: AvlNode<T>): AvlNode<T> {
    const y = x.right!;
    const t2 = y.left;

    y.left = x;
    x.right = t2;

    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  private rebalance(n: AvlNode<T>): AvlNode<T> {
    const bf = this.balanceFactor(n);

    if (bf > 1) {
      if (this.balanceFactor(n.left) < 0) {
        n.left = this.rotateLeft(n.left!);
      }
      return this.rotateRight(n);
    }

    if (bf < -1) {
      if (this.balanceFactor(n.right) > 0) {
        n.right = this.rotateRight(n.right!);
      }
      return this.rotateLeft(n);
    }

    return n;
  }
}

class AvlNode<T> {
  public key: T;
  public cnt: number;
  public h: number;
  public left: AvlNode<T> | null;
  public right: AvlNode<T> | null;

  constructor(key: T) {
    this.key = key;
    this.cnt = 1;
    this.h = 1;
    this.left = null;
    this.right = null;
  }
}

export class AvlNodeWrapper<T> {
  private readonly node: AvlNode<T>;
  constructor(node: AvlNode<T>) {
    this.node = node;
  }
  public getValue(): T {
    return this.node.key;
  }
}

// pair = [frequency, value]
type Pair = [number, number];

// window state kept as plain data
type XSumState = {
  x: number;
  large: AvlTree<Pair>;
  small: AvlTree<Pair>;
  occ: Map<number, number>;
  sum: bigint;
};

function createState(x: number): XSumState {
  const cmp = (a: Pair, b: Pair): number => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  };

  return {
    x,
    large: new AvlTree<Pair>(cmp),
    small: new AvlTree<Pair>(cmp),
    occ: new Map<number, number>(),
    sum: BigInt(0),
  };
}

function insertValue(st: XSumState, v: number): void {
  const f = st.occ.get(v) ?? 0;
  if (f > 0) {
    internalRemove(st, [f, v]);
  }
  const nf = f + 1;
  st.occ.set(v, nf);
  internalInsert(st, [nf, v]);
}

function removeValue(st: XSumState, v: number): void {
  const f = st.occ.get(v);
  if (f === undefined || f === 0) {
    return;
  }
  internalRemove(st, [f, v]);
  const nf = f - 1;
  if (nf > 0) {
    st.occ.set(v, nf);
    internalInsert(st, [nf, v]);
  } else {
    st.occ.delete(v);
  }
}

function internalInsert(st: XSumState, p: Pair): void {
  const minNode = st.large.min();
  const minPair: Pair | null = minNode ? (minNode.getValue() as Pair) : null;

  if (st.large.count() < st.x || (minPair !== null && comparePair(p, minPair) > 0)) {
    st.sum += BigInt(p[0]) * BigInt(p[1]);
    st.large.insert(p);

    if (st.large.count() > st.x) {
      const smallest = st.large.min();
      if (smallest) {
        const sp = smallest.getValue() as Pair;
        st.sum -= BigInt(sp[0]) * BigInt(sp[1]);
        st.large.remove(sp);
        st.small.insert(sp);
      }
    }
  } else {
    st.small.insert(p);
  }
}

function internalRemove(st: XSumState, p: Pair): void {
  if (st.large.has(p)) {
    st.sum -= BigInt(p[0]) * BigInt(p[1]);
    st.large.remove(p);

    if (st.small.count() > 0) {
      const largestSmall = st.small.max();
      if (largestSmall) {
        const lp = largestSmall.getValue() as Pair;
        st.sum += BigInt(lp[0]) * BigInt(lp[1]);
        st.small.remove(lp);
        st.large.insert(lp);
      }
    }
  } else {
    st.small.remove(p);
  }
}

function comparePair(a: Pair, b: Pair): number {
  return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
}
