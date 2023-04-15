export function eventualSafeNodes(graph: number[][]): number[] {
  let result = [];
  let safeNodes = new Set<number>();
  let notSafeNodes = new Set<number>();
  for (let i = 0; i < graph.length; i++) {
    if (isSafeNode(i, graph, new Set(), safeNodes, notSafeNodes)) {
      result.push(i);
    }
  }
  return result;
}

function isTerminalNode(node: number, graph: number[][]): boolean {
  const nodes = graph[node];
  return !nodes.length;
}

function isSafeNode(
  node: number,
  graph: number[][],
  visited: Set<number>,
  safeNodes: Set<number>,
  notSafeNodes: Set<number>,
): boolean {
  if (visited.has(node)) {
    notSafeNodes.add(node);
    return false;
  }
  if (safeNodes.has(node)) {
    return true;
  }
  if (isTerminalNode(node, graph)) {
    safeNodes.add(node);
    return true;
  }
  if (notSafeNodes.has(node)) {
    return false;
  }
  const nodes = graph[node];
  for (let i = 0; i < nodes.length; i++) {
    visited.add(node);
    if (!isSafeNode(nodes[i], graph, visited, safeNodes, notSafeNodes)) {
      notSafeNodes.add(nodes[i]);
      return false;
    }
    visited.delete(node);
  }
  safeNodes.add(node);
  return true;
}
