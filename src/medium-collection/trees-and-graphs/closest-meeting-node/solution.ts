export function closestMeetingNode(edges: number[], node1: number, node2: number): number {
  let passed1 = false;
  let passed2 = false;
  let visited1 = new Set<number>();
  let visited2 = new Set<number>();
  let result = Infinity;
  while (!passed1 || !passed2) {
    // mark node1 as visited in the first traversal
    if (!passed1) {
      visited1.add(node1);
    }
    // mark node2 as visited in the second traversal
    if (!passed2) {
      visited2.add(node2);
    }
    // if node2 was already visited in the first traversal, consider it
    if (visited1.has(node2)) {
      result = Math.min(result, node2);
    }
    // if node1 was already visited in the second traversal, consider it
    if (visited2.has(node1)) {
      result = Math.min(result, node1);
    }
    // if we've found a common node, return the smallest index
    if (result !== Infinity) {
      return result;
    }
    // advance node1 or mark the first traversal as complete
    if (edges[node1] === -1 || visited1.has(edges[node1])) {
      passed1 = true;
    } else {
      node1 = edges[node1];
    }
    // advance node2 or mark the second traversal as complete
    if (edges[node2] === -1 || visited2.has(edges[node2])) {
      passed2 = true;
    } else {
      node2 = edges[node2];
    }
  }
  return -1;
}
