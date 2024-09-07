class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  unite(x: number, y: number): void {
    let px = this.find(x);
    let py = this.find(y);
    if (px !== py) {
      if (this.rank[px] > this.rank[py]) {
        this.parent[py] = px;
      } else if (this.rank[px] < this.rank[py]) {
        this.parent[px] = py;
      } else {
        this.parent[py] = px;
        this.rank[px] += 1;
      }
    }
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  reset(x: number): void {
    this.parent[x] = x;
    this.rank[x] = 0;
  }
}

export function findAllPeople(n: number, meetings: number[][], firstPerson: number): number[] {
  meetings.sort((a, b) => a[2] - b[2]);

  const sameTimeMeetings: Map<number, Array<[number, number]>> = new Map();
  meetings.forEach(([x, y, t]) => {
    if (!sameTimeMeetings.has(t)) sameTimeMeetings.set(t, []);
    sameTimeMeetings.get(t)!.push([x, y]);
  });

  const graph = new UnionFind(n);
  graph.unite(firstPerson, 0);

  sameTimeMeetings.forEach((meetings, t) => {
    meetings.forEach(([x, y]) => {
      graph.unite(x, y);
    });

    const resetSet = new Set<number>();
    meetings.forEach(([x, y]) => {
      if (!graph.connected(x, 0)) {
        resetSet.add(x);
        resetSet.add(y);
      }
    });
    resetSet.forEach((x) => {
      graph.reset(x);
    });
  });

  const ans: number[] = [];
  for (let i = 0; i < n; i++) {
    if (graph.connected(i, 0)) {
      ans.push(i);
    }
  }
  return ans;
}
