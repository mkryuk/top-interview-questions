export function minimumCost(n: number, edges: number[][], query: number[][]): number[] {
  const dsu = new DSU(n);
  for (const [u, v, _] of edges) {
    dsu.union(u, v);
  }

  // for each component, compute the global AND of all edges.
  // use -1 (all ones in 32-bit) as the identity value.
  const compAnd = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    const rep = dsu.find(i);
    if (!compAnd.has(rep)) {
      compAnd.set(rep, -1);
    }
  }
  for (const [u, v, w] of edges) {
    const rep = dsu.find(u);
    compAnd.set(rep, compAnd.get(rep)! & w);
  }

  // Answer each query: if s and t are connected, answer is the global AND; else -1.
  const result: number[] = [];
  for (const [s, t] of query) {
    if (dsu.find(s) !== dsu.find(t)) {
      result.push(-1);
    } else {
      result.push(compAnd.get(dsu.find(s))!);
    }
  }
  return result;
}

class DSU {
  parent: number[];
  rank: number[];
  constructor(n: number) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }
  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }
  union(x: number, y: number): void {
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
