export function findRedundantConnection(edges: number[][]): number[] {
  const uf = new UnionFind(edges.length + 1);
  for (const [node1, node2] of edges) {
    if (!uf.union(node1, node2)) {
      return [node1, node2];
    }
  }
  return [];
}

class UnionFind {
  parent: number[];
  rank: number[];
  constructor(size: number) {
    this.parent = new Array(size).fill(0).map((_, index) => index);
    this.rank = new Array(size).fill(1);
  }

  find(node: number): number {
    if (node !== this.parent[node]) {
      this.parent[node] = this.find(this.parent[node]);
    }
    return this.parent[node];
  }

  union(node1: number, node2: number): boolean {
    const root1 = this.find(node1);
    const root2 = this.find(node2);
    if (root1 === root2) {
      return false;
    }
    if (this.rank[root1] < this.rank[root2]) {
      this.parent[root1] = root2;
    } else if (this.rank[root1] > this.rank[root2]) {
      this.parent[root2] = root1;
    } else {
      this.parent[root2] = root1;
      this.rank[root1]++;
    }
    return true;
  }
}
