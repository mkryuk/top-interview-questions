export function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length;

  // Initialize the color array to represent the state of each node:
  // 0: unvisited, 1: visiting, 2: visited (safe)
  const color: number[] = new Array(n).fill(0);

  // Initialize the result array to store the safe nodes
  const result: number[] = [];

  // Define the isSafe function to perform depth-first search
  const isSafe = (node: number): boolean => {
    // If the node has already been visited, return whether it's safe
    if (color[node] > 0) {
      return color[node] === 2;
    }

    // Mark the node as visiting
    color[node] = 1;

    // Visit all neighboring nodes
    for (const neighbor of graph[node]) {
      // If the neighbor is unsafe, return false
      if (!isSafe(neighbor)) {
        return false;
      }
    }

    // Mark the node as visited (safe) and return true
    color[node] = 2;
    return true;
  };

  // Iterate through the graph
  for (let i = 0; i < n; i++) {
    // If the dfs function returns true, add the node to the result array
    if (isSafe(i)) {
      result.push(i);
    }
  }

  // Return the result array containing the safe nodes
  return result;
}
