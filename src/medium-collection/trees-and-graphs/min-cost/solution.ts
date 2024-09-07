export function minimumCost(
  source: string,
  target: string,
  original: string[],
  changed: string[],
  cost: number[],
): number {
  const INF = 1e9; // a large value representing infinity
  const n = source.length;
  const m = original.length;
  const charCount = 26; // number of lowercase English letters

  // create a distance matrix initialized to infinity
  const dist = Array.from({ length: charCount }, () => Array(charCount).fill(INF));

  // initialize self-distances to 0
  for (let i = 0; i < charCount; i++) {
    dist[i][i] = 0;
  }

  // fill the distance matrix with given costs
  for (let i = 0; i < m; i++) {
    const from = original[i].charCodeAt(0) - "a".charCodeAt(0);
    const to = changed[i].charCodeAt(0) - "a".charCodeAt(0);
    dist[from][to] = Math.min(dist[from][to], cost[i]);
  }

  // Floyd-Warshall algorithm to find all-pairs shortest paths
  for (let k = 0; k < charCount; k++) {
    for (let i = 0; i < charCount; i++) {
      for (let j = 0; j < charCount; j++) {
        if (dist[i][k] < INF && dist[k][j] < INF) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }

  // calculate the total minimum cost to convert source to target
  let totalCost = 0;
  for (let i = 0; i < n; i++) {
    const from = source[i].charCodeAt(0) - "a".charCodeAt(0);
    const to = target[i].charCodeAt(0) - "a".charCodeAt(0);
    if (dist[from][to] === INF) {
      return -1; // impossible to convert
    }
    totalCost += dist[from][to];
  }

  return totalCost;
}
