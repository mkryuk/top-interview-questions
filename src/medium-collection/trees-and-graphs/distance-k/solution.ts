import { TreeNode } from "../common";

export function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  if (root === null || target === null) {
    return [];
  }
  let parents = new Map<number, TreeNode | null>();
  createMap(root, null, parents);
  let result: number[] = [];
  let visited = new Set<number>();
  dfs(target, 0, k, result, visited, parents);
  return result;
}

function createMap(node: TreeNode | null, parent: TreeNode | null, parents: Map<number, TreeNode | null>) {
  if (node === null) {
    return;
  }
  parents.set(node.val, parent);
  createMap(node.left, node, parents);
  createMap(node.right, node, parents);
}

function dfs(
  node: TreeNode | null,
  distance: number,
  k: number,
  result: number[],
  visited: Set<number>,
  map: Map<number, TreeNode | null>,
) {
  if (node === null || visited.has(node.val)) {
    return;
  }
  visited.add(node.val);
  if (distance === k) {
    result.push(node.val);
    return;
  }
  dfs(node.left, distance + 1, k, result, visited, map);
  dfs(node.right, distance + 1, k, result, visited, map);
  const parent: TreeNode | null = map.get(node.val)!;
  dfs(parent, distance + 1, k, result, visited, map);
}
