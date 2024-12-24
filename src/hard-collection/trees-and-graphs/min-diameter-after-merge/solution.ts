export function minimumDiameterAfterMerge(edges1: number[][], edges2: number[][]): number {
  const n1 = edges1.length + 1;
  const n2 = edges2.length + 1;
  const d1 = findDiameter(n1, edges1);
  const d2 = findDiameter(n2, edges2);
  const r1 = Math.floor((d1 + 1) / 2);
  const r2 = Math.floor((d2 + 1) / 2);
  return Math.max(d1, d2, r1 + r2 + 1);
}

function findDiameter(n: number, edges: number[][]): number {
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (const [from, to] of edges) {
    graph[from].push(to);
    graph[to].push(from);
  }

  // if there is only 1 node
  if (n === 1) {
    return 0;
  }

  const [farthestNode] = bfsFarthest(graph, 0);
  const [_, diameter] = bfsFarthest(graph, farthestNode);
  return diameter;
}

function bfsFarthest(graph: number[][], start: any): [number, number] {
  const n = graph.length;
  const visited = new Array<boolean>(n).fill(false);
  // [node, distance]
  const queue: [number, number][] = [];
  let farthestNode = start;
  let maxDist = 0;
  queue.push([start, 0]);
  visited[start] = true;
  let qIdx = 0;
  while (queue.length - qIdx > 0) {
    const [cur, dist] = queue[qIdx++];
    if (dist > maxDist) {
      maxDist = dist;
      farthestNode = cur;
    }
    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, dist + 1]);
      }
    }
  }
  return [farthestNode, maxDist];
}
