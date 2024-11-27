export function shortestDistanceAfterQueries(n: number, queries: number[][]): number[] {
  let graph = new Map<number, number[]>();
  for (let i = 0; i < n - 1; i++) {
    graph.set(i, [i + 1]);
  }

  const result: number[] = [];
  for (const [start, end] of queries) {
    graph.get(start)!.push(end);
    const shortestDistance = getShortestDistance(n, graph);
    result.push(shortestDistance);
  }

  return result;
}

function getShortestDistance(n: number, graph: Map<number, number[]>): number {
  let distances = Array(n).fill(Infinity);
  let queue = [[0, 0]];
  let visited = new Set<number>();
  distances[0] = 0;
  while (queue.length > 0) {
    const [node, distance] = queue.shift()!;
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);
    if (graph.has(node)) {
      const neighbors = graph.get(node)!;
      for (const neighbor of neighbors) {
        const newDist = distance + 1;
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          queue.push([neighbor, newDist]);
        }
      }
    }
  }

  return distances[n - 1];
}
