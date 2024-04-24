export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) {
    return [0];
  }

  let adjList: Set<number>[] = Array.from({ length: n }, () => new Set());
  for (const [from, to] of edges) {
    adjList[from].add(to);
    adjList[to].add(from);
  }

  let leaves: number[] = [];
  for (let i = 0; i < n; i++) {
    if (adjList[i].size === 1) {
      leaves.push(i);
    }
  }

  let remaining = n;
  while (remaining > 2) {
    const newLeaves: number[] = [];
    remaining -= leaves.length;
    for (const leaf of leaves) {
      // There's exactly one neighbor for a leaf in an undirected tree.
      let neighbor = adjList[leaf].values().next().value;
      adjList[neighbor].delete(leaf);
      if (adjList[neighbor].size === 1) {
        newLeaves.push(neighbor);
      }
    }
    leaves = newLeaves;
  }
  return leaves;
}
