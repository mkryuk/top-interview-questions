export function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  // Create graph from edges
  const graph = new Array(n).fill(0).map(() => new Array<number>());
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const count: number[] = new Array(n).fill(1); // Subtree sizes (count of nodes including itself)
  const result: number[] = new Array(n).fill(0); // Result array

  calculateSubtrees(0, -1, graph, count, result); // Start DFS from node 0 with no parent
  calculateResults(0, -1, n, graph, count, result); // Propagate the correct distances to all nodes

  return result;
}

// DFS to calculate subtree sizes and initial distances for root
function calculateSubtrees(
  node: number,
  parent: number,
  graph: number[][],
  count: number[],
  result: number[],
): void {
  for (let neighbor of graph[node]) {
    if (neighbor === parent) {
      continue;
    }
    calculateSubtrees(neighbor, node, graph, count, result);
    count[node] += count[neighbor];
    result[node] += result[neighbor] + count[neighbor];
  }
}

// DFS to calculate results based on the parent's result
function calculateResults(
  node: number,
  parent: number,
  n: number,
  graph: number[][],
  count: number[],
  result: number[],
): void {
  for (let neighbor of graph[node]) {
    if (neighbor === parent) {
      continue;
    }
    // Recalculate the answer for the child based on the parent's answer
    result[neighbor] = result[node] - count[neighbor] + (n - count[neighbor]);
    calculateResults(neighbor, node, n, graph, count, result);
  }
}
