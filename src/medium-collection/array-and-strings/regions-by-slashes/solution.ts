export function regionsBySlashes(grid: string[]): number {
  const n = grid.length;
  const size = n * n * 4;
  const uf = new UnionFind(size);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0) {
        uf.union(getIndex(n, i - 1, j, 2), getIndex(n, i, j, 0));
      }
      if (j > 0) {
        uf.union(getIndex(n, i, j - 1, 1), getIndex(n, i, j, 3));
      }
      if (grid[i][j] !== "/") {
        uf.union(getIndex(n, i, j, 0), getIndex(n, i, j, 1));
        uf.union(getIndex(n, i, j, 2), getIndex(n, i, j, 3));
      }
      if (grid[i][j] !== "\\") {
        uf.union(getIndex(n, i, j, 0), getIndex(n, i, j, 3));
        uf.union(getIndex(n, i, j, 1), getIndex(n, i, j, 2));
      }
    }
  }

  return uf.getCount();
}

class UnionFind {
  private parent: number[];
  private rank: number[];
  private count: number;

  constructor(n: number) {
    this.parent = Array(n)
      .fill(0)
      .map((_, i) => i);
    this.rank = Array(n).fill(0);
    this.count = n;
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
    this.count--;
  }

  getCount(): number {
    return this.count;
  }
}

function getIndex(n: number, row: number, col: number, k: number): number {
  return (row * n + col) * 4 + k;
}
