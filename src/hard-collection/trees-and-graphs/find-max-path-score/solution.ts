export function findMaxPathScore(edges: number[][], online: boolean[], k: number): number {
  const n = online.length;
  const graph = buildGraph(n, edges);
  const order = getTopologicalOrder(n, graph);
  let maxCost = 0;

  for (const edge of edges) {
    maxCost = Math.max(maxCost, edge[2]);
  }

  let left = 0;
  let right = maxCost;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (canReachWithScore(mid, graph, order, online, k)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function buildGraph(n: number, edges: number[][]): Array<Array<[number, number]>> {
  const graph: Array<Array<[number, number]>> = Array.from({ length: n }, () => []);

  for (const [u, v, cost] of edges) {
    graph[u].push([v, cost]);
  }

  return graph;
}

function getTopologicalOrder(n: number, graph: Array<Array<[number, number]>>): number[] {
  const indegree = new Array<number>(n).fill(0);
  for (let u = 0; u < n; u++) {
    for (const [v] of graph[u]) {
      indegree[v]++;
    }
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  const order: number[] = [];
  let head = 0;
  while (head < queue.length) {
    const u = queue[head];
    head++;
    order.push(u);
    for (const [v] of graph[u]) {
      indegree[v]--;
      if (indegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return order;
}

function canReachWithScore(
  minAllowedEdgeCost: number,
  graph: Array<Array<[number, number]>>,
  order: number[],
  online: boolean[],
  k: number,
): boolean {
  const n = online.length;
  const inf = Number.POSITIVE_INFINITY;
  const dist = new Array<number>(n).fill(inf);
  dist[0] = 0;

  for (const u of order) {
    if (dist[u] === inf) {
      continue;
    }
    if (dist[u] > k) {
      continue;
    }

    for (const [v, cost] of graph[u]) {
      // skip edges that would make the path score too small
      if (cost < minAllowedEdgeCost) {
        continue;
      }

      // all visited nodes must be online
      if (!online[v]) {
        continue;
      }

      const nextCost = dist[u] + cost;
      if (nextCost < dist[v]) {
        dist[v] = nextCost;
      }
    }
  }

  return dist[n - 1] <= k;
}
