class UnionFind {
  parent: number[];
  rank: number[];

  constructor(size: number) {
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.rank = new Array(size).fill(1);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): boolean {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX] += 1;
    }

    return true;
  }
}

export function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  let ufAlice = new UnionFind(n + 1);
  let ufBob = new UnionFind(n + 1);
  let ufBoth = new UnionFind(n + 1);

  let totalEdgesUsed = 0;

  // First, process all type 3 edges
  for (let [type, u, v] of edges) {
    if (type === 3) {
      if (ufBoth.union(u, v)) {
        ufAlice.union(u, v);
        ufBob.union(u, v);
        totalEdgesUsed++;
      }
    }
  }

  // Then, process type 1 and type 2 edges
  for (let [type, u, v] of edges) {
    if (type === 1) {
      if (ufAlice.union(u, v)) {
        totalEdgesUsed++;
      }
    } else if (type === 2) {
      if (ufBob.union(u, v)) {
        totalEdgesUsed++;
      }
    }
  }

  // Check if both Alice and Bob can traverse the entire graph
  let connectedComponentsAlice = new Set();
  let connectedComponentsBob = new Set();

  for (let i = 1; i <= n; i++) {
    connectedComponentsAlice.add(ufAlice.find(i));
    connectedComponentsBob.add(ufBob.find(i));
  }

  if (connectedComponentsAlice.size > 1 || connectedComponentsBob.size > 1) {
    return -1;
  }

  return edges.length - totalEdgesUsed;
}
