export function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number,
): boolean {
  let hashSet = new Map<number, Set<number>>();
  edges.forEach(([left, right]) => {
    if (!hashSet.has(left)) {
      hashSet.set(left, new Set<number>());
    }
    if (!hashSet.has(right)) {
      hashSet.set(right, new Set<number>());
    }
    hashSet.get(left)!.add(right);
    hashSet.get(right)!.add(left);
  });

  return dfs(source, destination, hashSet, new Set());
}

function dfs(
  source: number,
  destination: number,
  hashSet: Map<number, Set<number>>,
  visited: Set<number>,
): boolean {
  if (source === destination) {
    return true;
  }
  if (!visited.has(source)) {
    visited.add(source);
    const nodeSet = hashSet.get(source);
    if (nodeSet && nodeSet.has(destination)) {
      return true;
    }
    const nodes = Array.from(nodeSet ?? []);
    for (let i = 0; i < nodes.length; i++) {
      if (dfs(nodes[i], destination, hashSet, visited)) {
        return true;
      }
    }
  }
  return false;
}
