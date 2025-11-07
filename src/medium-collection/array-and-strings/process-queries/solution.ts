import { Heap } from "../../../hard-collection/design/heap/heap";

export function processQueries(c: number, connections: number[][], queries: number[][]): number[] {
  const uf: UnionFind = new UnionFind(c + 1);

  // union all connections
  for (const [u, v] of connections) {
    uf.union(u, v);
  }

  // create a min-heap per component root
  const heaps = new Map<number, Heap<number>>();
  for (let id = 1; id <= c; id += 1) {
    const r = uf.find(id);
    if (!heaps.has(r)) {
      heaps.set(r, new Heap<number>((a, b) => a - b));
    }
    heaps.get(r)!.push(id);
  }

  // track online status
  const online: boolean[] = new Array(c + 1).fill(true);

  // process queries
  const result: number[] = [];
  for (const [t, x] of queries) {
    if (t === 1) {
      if (online[x]) {
        result.push(x);
      } else {
        result.push(getMinOnlineInStation(x, uf, heaps, online));
      }
    } else {
      if (online[x]) {
        online[x] = false;
      }
    }
  }

  return result;
}

const getMinOnlineInStation = (
  x: number,
  uf: UnionFind,
  heaps: Map<number, Heap<number>>,
  online: boolean[],
): number => {
  const r = uf.find(x);
  const heap = heaps.get(r);
  if (!heap) {
    return -1;
  }

  // lazy-clean offline nodes at the top
  while (!heap.isEmpty()) {
    const top = heap.top();
    if (top === null) {
      break;
    }
    if (!online[top]) {
      heap.pop();
    } else {
      break;
    }
  }

  if (heap.isEmpty()) {
    return -1;
  }

  const station = heap.top();
  return station === null ? -1 : station;
};

class UnionFind {
  private parent: number[];
  private rank: number[];

  constructor(n: number) {
    this.parent = new Array(n);
    this.rank = new Array(n);
    for (let i = 0; i < n; i += 1) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a: number, b: number): void {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra === rb) {
      return;
    }
    if (this.rank[ra] < this.rank[rb]) {
      this.parent[ra] = rb;
    } else if (this.rank[ra] > this.rank[rb]) {
      this.parent[rb] = ra;
    } else {
      this.parent[rb] = ra;
      this.rank[ra] += 1;
    }
  }
}
