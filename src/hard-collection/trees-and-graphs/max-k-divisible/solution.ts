export function maxKDivisibleComponents(n: number, edges: number[][], values: number[], k: number): number {
  const tree: number[][] = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    tree[a].push(b);
    tree[b].push(a);
  }

  let components = 0;
  dfs(0, -1, tree, values, k, () => components++);
  return components;
}
function dfs(
  node: number,
  parent: number,
  tree: number[][],
  values: number[],
  k: number,
  incrementComponents: () => number,
): number {
  let subtreeSum = values[node];

  for (const neighbor of tree[node]) {
    if (neighbor !== parent) {
      subtreeSum += dfs(neighbor, node, tree, values, k, incrementComponents);
    }
  }

  if (subtreeSum % k === 0) {
    incrementComponents();
    return 0;
  }
  return subtreeSum;
}
