export function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number,
): number {
  const edgesMap = new Map<number, { to: number; weight: number }[]>();
  for (const [from, to, weight] of edges) {
    if (!edgesMap.has(from)) {
      edgesMap.set(from, []);
    }
    if (!edgesMap.has(to)) {
      edgesMap.set(to, []);
    }
    edgesMap.get(from)!.push({ to, weight });
    edgesMap.get(to)!.push({ to: from, weight });
  }

  const reachableCount = new Array(n).fill(0);

  // calculate the number of reachable cities for each city
  for (let i = 0; i < n; i++) {
    const visitedNodes = new Set<number>();
    getPathsNumber(i, edgesMap, distanceThreshold, new Set(), visitedNodes);
    reachableCount[i] = visitedNodes.size;
  }

  // find the city with the smallest number of reachable cities
  let minReachable = n;
  let cityIndex = 0;

  for (let i = 0; i < n; i++) {
    if (reachableCount[i] <= minReachable) {
      minReachable = reachableCount[i];
      cityIndex = i;
    }
  }

  return cityIndex;
}

function getPathsNumber(
  from: number,
  edges: Map<number, { to: number; weight: number }[]>,
  distanceThreshold: number,
  visitedPath: Set<number>,
  visitedNodes: Set<number>,
): void {
  if (distanceThreshold === 0) {
    visitedPath.add(from);
    visitedNodes.add(from);
  }
  if (distanceThreshold <= 0 || visitedPath.has(from)) {
    return;
  }

  visitedPath.add(from);
  visitedNodes.add(from);

  const toNodes = edges.get(from) ?? [];
  for (const { to, weight } of toNodes) {
    if (weight <= distanceThreshold && !visitedPath.has(to)) {
      getPathsNumber(
        to,
        edges,
        distanceThreshold - weight,
        visitedPath,
        visitedNodes,
      );
    }
  }

  visitedPath.delete(from);
}
