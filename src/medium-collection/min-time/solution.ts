export function minTime(
  n: number,
  edges: number[][],
  hasApple: boolean[],
): number {
  // Create a map to store the adjacency list of the tree
  const adjacent = new Map<number, number[]>();

  // For each edge, add the nodes to the adjacency list
  edges.forEach(([a, b]) => {
    // If the node is not already in the map, add it
    if (!adjacent.has(a)) {
      adjacent.set(a, []);
    }
    if (!adjacent.has(b)) {
      adjacent.set(b, []);
    }
    // Add the edge to the adjacency list
    adjacent.get(a)!.push(b);
    adjacent.get(b)!.push(a);
  });

  // Start the DFS from the root node (node 0)
  return dfs(0, -1, adjacent, hasApple);
}

function dfs(
  node: number,
  parent: number,
  adjacent: Map<number, number[]>,
  hasApple: boolean[],
): number {
  //Check if current node is parent node and return 0 if true
  if (node === parent) {
    return 0;
  }
  // Initialize total time
  let totalTime = 0;
  // Iterate through all child nodes
  for (let child of adjacent.get(node)!) {
    // Skip if the child is the parent
    if (child === parent) {
      continue;
    }
    // Recursive call on the child node
    let childTime = dfs(child, node, adjacent, hasApple);
    // If the child has an apple or its children have apples, add 2 minutes
    if (hasApple[child] || childTime > 0) {
      totalTime += childTime + 2;
    }
  }
  // Return the total time
  return totalTime;
}
