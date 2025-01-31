export function magnificentSets(n: number, edges: number[][]): number {
  // build an adjacency list for the given undirected graph
  const adj: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  // track visited nodes to split graph into connected components
  const visited: boolean[] = new Array(n + 1).fill(false);
  const components: number[][] = [];

  // perform a BFS for each unvisited node to determine each connected component
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      const component: number[] = [];
      const queue: number[] = [i];
      visited[i] = true;

      let first = 0;
      while (queue.length > first) {
        const u = queue[first++];
        component.push(u);

        for (const v of adj[u]) {
          if (!visited[v]) {
            visited[v] = true;
            queue.push(v);
          }
        }
      }
      components.push(component);
    }
  }

  let total = 0;

  // for each connected component, check bipartiteness and compute diameter
  for (const component of components) {
    if (!isBipartite(component, adj)) {
      return -1; // if any component is not bipartite, return -1 immediately
    }
    const diameter = computeDiameter(component, adj);
    // add (diameter + 1) to the total sum
    total += diameter + 1;
  }

  return total;
}

// checks if the subgraph induced by 'component' is bipartite
function isBipartite(component: number[], adj: number[][]): boolean {
  // color array for bipartite check: -1 => uncolored; 0/1 => two colors
  const color: number[] = new Array(adj.length).fill(-1);
  const start = component[0];
  color[start] = 0;

  // typical BFS bipartite check
  const queue: number[] = [start];
  let first = 0;

  while (queue.length > first) {
    const u = queue[first++];

    for (const v of adj[u]) {
      if (color[v] === -1) {
        color[v] = 1 - color[u]; // assign the opposite color
        queue.push(v);
      } else if (color[v] === color[u]) {
        // an edge connects two nodes of the same color => not bipartite
        return false;
      }
    }
  }
  return true;
}

// computes the diameter of the subgraph induced by 'component'
function computeDiameter(component: number[], adj: number[][]): number {
  let maxDist = 0;

  // for each node in the component, perform BFS to find the farthest node
  // track the largest BFS distance (this is effectively the diameter)
  for (const u of component) {
    const dist: number[] = new Array(adj.length).fill(-1);
    dist[u] = 0;

    const queue: number[] = [u];
    let first = 0;

    while (queue.length > first) {
      const current = queue[first++];

      for (const v of adj[current]) {
        if (dist[v] === -1) {
          dist[v] = dist[current] + 1;
          queue.push(v);
        }
      }
    }

    // find the largest distance from u to any node in the component
    let currentMax = 0;
    for (const node of component) {
      currentMax = Math.max(currentMax, dist[node]);
    }
    // update overall maxDist if this BFS gave a longer path
    if (currentMax > maxDist) {
      maxDist = currentMax;
    }
  }

  return maxDist;
}
