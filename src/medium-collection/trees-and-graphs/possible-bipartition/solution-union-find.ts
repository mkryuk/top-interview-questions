export function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const adj: { [key: number]: number[] } = {};
  for (const edge of dislikes) {
    const [a, b] = edge;
    if (!adj[a]) {
      adj[a] = [b];
    } else {
      adj[a].push(b);
    }
    if (!adj[b]) {
      adj[b] = [a];
    } else {
      adj[b].push(a);
    }
  }

  const dsu = new UnionFind(n + 1);
  for (let node = 1; node <= n; node++) {
    if (!adj[node]) {
      continue;
    }
    for (const neighbor of adj[node]) {
      // Check if the node and its neighbor is in the same set.
      if (dsu.find(node) === dsu.find(neighbor)) {
        return false;
      }
      // Move all the neighbors into same set as the first neighbor.
      dsu.union(adj[node][0], neighbor);
    }
  }
  return true;
}

class UnionFind {
  parent: number[];
  rank: number[];

  constructor(size: number) {
    this.parent = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
    this.rank = new Array(size);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    const xset = this.find(x);
    const yset = this.find(y);
    if (xset === yset) {
      return;
    } else if (this.rank[xset] < this.rank[yset]) {
      this.parent[xset] = yset;
    } else if (this.rank[xset] > this.rank[yset]) {
      this.parent[yset] = xset;
    } else {
      this.parent[yset] = xset;
      this.rank[xset]++;
    }
  }
}
