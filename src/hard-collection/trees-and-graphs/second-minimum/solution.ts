import { Heap } from "../../design/heap/heap";

export function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
  const graph: Map<number, number[]> = new Map();

  // build the graph
  for (const [u, v] of edges) {
    if (!graph.has(u)) {
      graph.set(u, []);
    }
    if (!graph.has(v)) {
      graph.set(v, []);
    }
    graph.get(u)?.push(v);
    graph.get(v)?.push(u);
  }

  // priority queue for the modified Dijkstra's algorithm
  const pq = new Heap<{ node: number; time: number }>((a, b) => a.time - b.time);
  pq.push({ node: 1, time: 0 });

  // array to keep track of the two shortest arrival times at each node
  const dist: number[][] = Array.from({ length: n + 1 }, () => [Infinity, Infinity]);
  dist[1][0] = 0;

  while (!pq.isEmpty()) {
    const { node, time: currentTime } = pq.pop()!;

    for (const neighbor of graph.get(node) || []) {
      // calculate the time to reach the neighbor
      let arrivalTime = currentTime + time;

      // determine the wait time at the neighbor's traffic signal
      if (Math.floor(currentTime / change) % 2 === 1) {
        arrivalTime += change - (currentTime % change);
      }

      // update the shortest and second shortest times
      if (arrivalTime < dist[neighbor][0]) {
        dist[neighbor][1] = dist[neighbor][0];
        dist[neighbor][0] = arrivalTime;
        pq.push({ node: neighbor, time: arrivalTime });
      } else if (arrivalTime > dist[neighbor][0] && arrivalTime < dist[neighbor][1]) {
        dist[neighbor][1] = arrivalTime;
        pq.push({ node: neighbor, time: arrivalTime });
      }
    }
  }

  return dist[n][1];
}
