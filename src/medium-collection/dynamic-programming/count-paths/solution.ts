import { Heap } from "../../../hard-collection/design/heap/heap";

export function countPaths(n: number, roads: number[][]): number {
  const mod = 1e9 + 7;
  const graph: { node: number; time: number }[][] = Array.from({ length: n }, () => []);
  for (const [u, v, t] of roads) {
    graph[u].push({ node: v, time: t });
    graph[v].push({ node: u, time: t });
  }
  const time: number[] = Array(n).fill(Infinity);
  const ways: number[] = Array(n).fill(0);
  time[0] = 0;
  ways[0] = 1;

  // create a min-heap based on the current distance
  const heap = new Heap<{ node: number; time: number }>((a, b) => a.time - b.time);
  heap.push({ node: 0, time: 0 });

  // Dijkstra's algorithm
  while (!heap.isEmpty()) {
    const current = heap.pop()!;
    const { node: curNode, time: curTime } = current;

    if (curTime > time[curNode]) {
      continue;
    }

    for (const neighbor of graph[curNode]) {
      const nextNode = neighbor.node;
      const nextTime = curTime + neighbor.time;

      // if a shorter path to nextNode is found, update and push into the heap
      if (nextTime < time[nextNode]) {
        time[nextNode] = nextTime;
        ways[nextNode] = ways[curNode];
        heap.push({ node: nextNode, time: nextTime });
      } else if (nextTime === time[nextNode]) {
        // if another shortest path is found, add the ways
        ways[nextNode] = (ways[nextNode] + ways[curNode]) % mod;
      }
    }
  }

  return ways[n - 1];
}
