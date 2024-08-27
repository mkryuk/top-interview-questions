import { Heap } from "../../../hard-collection/design/heap/heap";

export function maxProbability(
  n: number,
  edges: number[][],
  succProb: number[],
  start_node: number,
  end_node: number,
): number {
  let probabilities = new Array(n).fill(0);
  probabilities[start_node] = 1;
  let graph = new Map<number, number[][]>();
  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    graph.get(from)!.push([to, succProb[i]]);

    if (!graph.has(to)) {
      graph.set(to, []);
    }
    graph.get(to)!.push([from, succProb[i]]);
  }
  const maxPq = new Heap<[number, number]>(([nA, pA], [nB, pB]) => pB - pA);
  maxPq.push([start_node, 1]);
  while (maxPq.size() > 0) {
    const [currentNode, currentProb] = maxPq.pop()!;
    if (currentNode === end_node) {
      return currentProb;
    }
    const neighbors = graph.get(currentNode);
    for (const [node, probability] of neighbors || []) {
      const newProb = currentProb * probability;
      if (newProb > probabilities[node]) {
        probabilities[node] = newProb;
        maxPq.push([node, newProb]);
      }
    }
  }
  return 0;
}
