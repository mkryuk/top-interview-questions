class MinSegTree {
  private size: number;
  private tree: number[];

  constructor(arr: number[]) {
    const n = arr.length;
    this.size = 1;
    while (this.size < n) {
      this.size <<= 1;
    }
    this.tree = new Array(2 * this.size).fill(Infinity);
    // build leaves
    for (let i = 0; i < n; i++) {
      this.tree[this.size + i] = arr[i];
    }
    // build internals
    for (let i = this.size - 1; i > 0; i--) {
      this.tree[i] = Math.min(this.tree[2 * i], this.tree[2 * i + 1]);
    }
  }

  // range-min query on [l..r], 0-based
  rangeMin(l: number, r: number): number {
    let res = Infinity;
    l += this.size;
    r += this.size;
    while (l <= r) {
      if (l & 1) {
        res = Math.min(res, this.tree[l++]);
      }
      if (!(r & 1)) {
        res = Math.min(res, this.tree[r--]);
      }
      l >>= 1;
      r >>= 1;
    }
    return res;
  }

  // point-update: set position i to v
  update(i: number, v: number) {
    let pos = this.size + i;
    this.tree[pos] = v;
    pos >>= 1;
    while (pos > 0) {
      this.tree[pos] = Math.min(this.tree[2 * pos], this.tree[2 * pos + 1]);
      pos >>= 1;
    }
  }
}

export function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  const n = baskets.length;

  // sort baskets by capacity, keep original index
  const pairs = baskets.map((cap, i) => ({ cap, idx: i })).sort((a, b) => a.cap - b.cap);

  // extract sorted capacities & original indices
  const sortedCaps = pairs.map((p) => p.cap);
  const origIdxs = pairs.map((p) => p.idx);

  // map from original idx → position in `pairs`
  const posInSorted = new Array<number>(n);
  for (let si = 0; si < n; si++) {
    posInSorted[pairs[si].idx] = si;
  }

  // build a segment tree on origIdxs to answer "min original index" queries
  const seg = new MinSegTree(origIdxs);

  let unplaced = 0;

  for (const f of fruits) {
    // binary-search for the first basket with cap >= f
    let lo = 0,
      hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (sortedCaps[mid] >= f) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    if (lo === n) {
      // no basket big enough
      unplaced++;
      continue;
    }

    // among all baskets in [lo..n-1], pick the one with smallest original index
    const j = seg.rangeMin(lo, n - 1);
    if (j === Infinity) {
      // they’ve all been used
      unplaced++;
    } else {
      // mark that basket USED by setting its orig‐index to ∞
      const sortedPos = posInSorted[j];
      seg.update(sortedPos, Infinity);
    }
  }

  return unplaced;
}
