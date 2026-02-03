import { Heap } from "../../design/heap/heap";

type Node = {
  val: number;
  idx: number;
};

type State = {
  nums: number[];
  needSize: number;

  small: Heap<Node>; // max-heap by (val, idx)
  large: Heap<Node>; // min-heap by (val, idx)

  delayedSmall: Map<number, number>;
  delayedLarge: Map<number, number>;

  where: number[]; // 0 = absent, 1 = small, 2 = large

  smallCount: number;
  largeCount: number;
  sumSmall: number;
};

export function minimumCost(nums: number[], k: number, dist: number): number {
  const n: number = nums.length;
  const needSize: number = k - 2;

  if (needSize === 0) {
    return solveNeedSizeZero(nums, k);
  }

  const st: State = buildState(nums, needSize);

  // for fixed L, we take (k-2) smallest from window [L+1 .. min(n-1, L+dist)]
  // start with L=1 => window is [2 .. min(n-1, 1+dist)]
  const initialStart: number = 2;
  const initialEnd: number = Math.min(n - 1, 1 + dist);

  for (let i: number = initialStart; i <= initialEnd; i += 1) {
    addIndex(st, i);
  }

  // now window is filled, enforce exact sizes + ordering
  rebalance(st);

  let ans: number = Number.POSITIVE_INFINITY;
  const maxL: number = n - k + 1;

  for (let L: number = 1; L <= maxL; L += 1) {
    const cur: number = nums[0] + nums[L] + st.sumSmall;
    if (cur < ans) {
      ans = cur;
    }

    const outIdx: number = L + 1;
    const inIdx: number = L + dist + 1;

    if (outIdx <= n - 1) {
      removeIndex(st, outIdx);
    }

    if (inIdx <= n - 1) {
      addIndex(st, inIdx);
    }
  }

  return ans;
}

function nodeCmpAsc(a: Node, b: Node): number {
  if (a.val !== b.val) {
    return a.val - b.val;
  }
  return a.idx - b.idx;
}

function nodeCmpDesc(a: Node, b: Node): number {
  if (a.val !== b.val) {
    return b.val - a.val;
  }
  return b.idx - a.idx;
}

function delayedInc(map: Map<number, number>, idx: number): void {
  const cur: number = map.get(idx) ?? 0;
  map.set(idx, cur + 1);
}

function prune(heap: Heap<Node>, delayed: Map<number, number>): void {
  while (!heap.isEmpty()) {
    const top: Node | null = heap.top();
    if (top === null) {
      break;
    }

    const cnt: number = delayed.get(top.idx) ?? 0;
    if (cnt === 0) {
      break;
    }

    heap.pop();

    if (cnt === 1) {
      delayed.delete(top.idx);
    } else {
      delayed.set(top.idx, cnt - 1);
    }
  }
}

function popValidOrThrow(heap: Heap<Node>, delayed: Map<number, number>): Node {
  prune(heap, delayed);

  const node: Node | null = heap.pop();
  if (node === null) {
    throw new Error("pop from empty heap");
  }

  prune(heap, delayed);
  return node;
}

function insertSmall(st: State, node: Node): void {
  st.small.push(node);
  st.where[node.idx] = 1;
  st.smallCount += 1;
  st.sumSmall += node.val;
}

function insertLarge(st: State, node: Node): void {
  st.large.push(node);
  st.where[node.idx] = 2;
  st.largeCount += 1;
}

function extractSmallTop(st: State): Node {
  const node: Node = popValidOrThrow(st.small, st.delayedSmall);
  st.where[node.idx] = 0;
  st.smallCount -= 1;
  st.sumSmall -= node.val;
  return node;
}

function extractLargeTop(st: State): Node {
  const node: Node = popValidOrThrow(st.large, st.delayedLarge);
  st.where[node.idx] = 0;
  st.largeCount -= 1;
  return node;
}

function rebalance(st: State): void {
  if (st.needSize === 0) {
    return;
  }

  prune(st.small, st.delayedSmall);
  prune(st.large, st.delayedLarge);

  while (st.smallCount > st.needSize) {
    const x: Node = extractSmallTop(st);
    insertLarge(st, x);
    prune(st.small, st.delayedSmall);
    prune(st.large, st.delayedLarge);
  }

  while (st.smallCount < st.needSize && st.largeCount > 0) {
    const y: Node = extractLargeTop(st);
    insertSmall(st, y);
    prune(st.small, st.delayedSmall);
    prune(st.large, st.delayedLarge);
  }

  prune(st.small, st.delayedSmall);
  prune(st.large, st.delayedLarge);

  if (st.smallCount > 0 && st.largeCount > 0) {
    const a: Node | null = st.small.top();
    const b: Node | null = st.large.top();
    if (a !== null && b !== null) {
      // if max(small) > min(large), swap them
      if (nodeCmpAsc(a, b) > 0) {
        const x: Node = extractSmallTop(st);
        const y: Node = extractLargeTop(st);
        insertSmall(st, y);
        insertLarge(st, x);
      }
    }
  }

  prune(st.small, st.delayedSmall);
  prune(st.large, st.delayedLarge);
}

function addIndex(st: State, i: number): void {
  if (st.needSize === 0) {
    return;
  }

  const node: Node = { val: st.nums[i], idx: i };

  if (st.smallCount < st.needSize) {
    // initial fill: push into small until it reaches size needSize
    insertSmall(st, node);
    return;
  }

  prune(st.small, st.delayedSmall);

  const top: Node | null = st.small.top();
  if (top !== null && nodeCmpAsc(node, top) < 0) {
    insertSmall(st, node);

    // move current max from small to large to keep size
    const moved: Node = extractSmallTop(st);
    insertLarge(st, moved);

    rebalance(st);
    return;
  }

  insertLarge(st, node);
  rebalance(st);
}

function removeIndex(st: State, i: number): void {
  if (st.needSize === 0) {
    return;
  }

  const loc: number = st.where[i];

  if (loc === 1) {
    st.smallCount -= 1;
    st.sumSmall -= st.nums[i];
    delayedInc(st.delayedSmall, i);
    st.where[i] = 0;
    rebalance(st);
    return;
  }

  if (loc === 2) {
    st.largeCount -= 1;
    delayedInc(st.delayedLarge, i);
    st.where[i] = 0;
    rebalance(st);
    return;
  }

  // already absent
  rebalance(st);
}

function buildState(nums: number[], needSize: number): State {
  const st: State = {
    nums,
    needSize,

    // small = max-heap, large = min-heap
    small: new Heap<Node>((a, b) => nodeCmpDesc(a, b)),
    large: new Heap<Node>((a, b) => nodeCmpAsc(a, b)),

    delayedSmall: new Map<number, number>(),
    delayedLarge: new Map<number, number>(),

    where: Array(nums.length).fill(0),

    smallCount: 0,
    largeCount: 0,
    sumSmall: 0,
  };

  return st;
}

function solveNeedSizeZero(nums: number[], k: number): number {
  // needSize = k-2 = 0 means k=2, but handle anyway
  let best: number = Number.POSITIVE_INFINITY;

  for (let L: number = 1; L <= nums.length - k + 1; L += 1) {
    const cur: number = nums[0] + nums[L];
    if (cur < best) {
      best = cur;
    }
  }

  return best;
}
