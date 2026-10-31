import { Heap } from "../../../hard-collection/design/heap/heap";

export function shortestPath(n: number, edges: number[][], labels: string, k: number): number {
  type State = [distance: number, node: number, count: number];
  const graph: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);

  for (const [u, v, w] of edges) {
    graph[u].push([v, w]);
  }

  const dist = new Float64Array(n * k);
  dist.fill(Infinity);

  const heap = new Heap<State>((a, b) => {
    return a[0] - b[0];
  });

  const getIndex = (node: number, count: number): number => {
    return node * k + count - 1;
  };

  dist[getIndex(0, 1)] = 0;
  heap.push([0, 0, 1]);

  while (!heap.isEmpty()) {
    const [distance, node, count] = heap.pop()!;

    if (distance !== dist[getIndex(node, count)]) {
      continue;
    }

    if (node === n - 1) {
      return distance;
    }

    for (const [nextNode, weight] of graph[node]) {
      let nextCount = 1;

      if (labels[node] === labels[nextNode]) {
        nextCount = count + 1;
      }

      if (nextCount > k) {
        continue;
      }

      const nextDistance = distance + weight;
      const nextIndex = getIndex(nextNode, nextCount);

      if (nextDistance >= dist[nextIndex]) {
        continue;
      }

      dist[nextIndex] = nextDistance;
      heap.push([nextDistance, nextNode, nextCount]);
    }
  }

  return -1;
}
