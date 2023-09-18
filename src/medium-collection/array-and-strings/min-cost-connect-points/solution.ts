export function minCostConnectPoints(points: number[][]): number {
  const n = points.length;
  // Array to keep track of each point's parent (for union-find)
  const parent: number[] = [];
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  // Create a list of edges between all pairs of points, with their weights (Manhattan distance)
  const edges: { u: number; v: number; weight: number }[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push({
        u: i,
        v: j,
        weight: manhattanDistance(points[i], points[j]),
      });
    }
  }

  // Sort the edges by weight
  edges.sort((a, b) => a.weight - b.weight);

  let cost = 0;
  let count = 0;
  // Kruskal's algorithm: iterate over the edges and add them to the MST if they don't create a cycle
  for (const edge of edges) {
    const rootU = find(parent, edge.u);
    const rootV = find(parent, edge.v);

    if (rootU !== rootV) {
      cost += edge.weight;
      parent[rootU] = rootV;
      count++;
    }

    // If we've added n-1 edges, we can stop since we've connected all points
    if (count === n - 1) {
      break;
    }
  }

  return cost;
}

// Function to compute the Manhattan distance between two points
function manhattanDistance(p1: number[], p2: number[]): number {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}

// A helper function for the union-find data structure. Finds the root of an element.
function find(parent: number[], x: number): number {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}
