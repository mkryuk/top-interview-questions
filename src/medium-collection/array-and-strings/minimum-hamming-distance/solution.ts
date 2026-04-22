export function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
  const n = source.length;
  const dsu = new DSU(n);

  // build connected components
  for (const [a, b] of allowedSwaps) {
    dsu.union(a, b);
  }

  // component root -> frequency map of source values
  const groups = new Map<number, Map<number, number>>();

  for (let i = 0; i < n; i++) {
    const root = dsu.find(i);

    if (!groups.has(root)) {
      groups.set(root, new Map<number, number>());
    }

    const freq = groups.get(root)!;
    freq.set(source[i], (freq.get(source[i]) ?? 0) + 1);
  }

  // subtract target values from the same component
  for (let i = 0; i < n; i++) {
    const root = dsu.find(i);
    const freq = groups.get(root)!;
    const value = target[i];

    freq.set(value, (freq.get(value) ?? 0) - 1);
  }

  // remaining positive counts are unmatched source values
  let result = 0;

  for (const freq of groups.values()) {
    for (const count of freq.values()) {
      if (count > 0) {
        result += count;
      }
    }
  }

  return result;
}

class DSU {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  public find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  public union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}
