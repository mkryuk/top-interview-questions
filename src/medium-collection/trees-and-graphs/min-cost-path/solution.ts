import { Heap } from "../../../hard-collection/design/heap/heap";

export function minCost(n: number, edges: number[][]): number {
  type AdjEdge = { to: number; cost: number };

  const graph: AdjEdge[][] = new Array<AdjEdge[]>(n);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [u, v, w] of edges) {
    graph[u].push({ to: v, cost: w });
    graph[v].push({ to: u, cost: 2 * w });
  }

  const dist: number[] = new Array<number>(n).fill(Number.POSITIVE_INFINITY);
  dist[0] = 0;

  // item is [distance, node]
  type Item = [number, number];

  const heap: Heap<Item> = new Heap<Item>((a: Item, b: Item): number => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  heap.push([0, 0]);

  while (!heap.isEmpty()) {
    const cur: Item | null = heap.pop();
    if (cur === null) {
      break;
    }

    const currentDist: number = cur[0];
    const node: number = cur[1];

    // skip stale entries
    if (currentDist !== dist[node]) {
      continue;
    }

    if (node === n - 1) {
      return currentDist;
    }

    for (const e of graph[node]) {
      const next: number = e.to;
      const nd: number = currentDist + e.cost;

      if (nd < dist[next]) {
        dist[next] = nd;
        heap.push([nd, next]);
      }
    }
  }

  if (dist[n - 1] === Number.POSITIVE_INFINITY) {
    return -1;
  }

  return dist[n - 1];
}
