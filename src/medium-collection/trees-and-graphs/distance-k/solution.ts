import { TreeNode } from "../common";

export function distanceK(
  root: TreeNode | null,
  target: TreeNode | null,
  k: number,
): number[] {
  if (root === null || target === null) {
    return [];
  }
  let map = new Map<number, TreeNode | null>();
  createMap(root, null, map);
  let result: number[] = [];
  let visited = new Set<number>();
  dfs(target, 0, k, result, visited);
  let distance = 1;
  let parent: TreeNode | null = map.get(target.val)!;
  while (distance <= k && parent !== null) {
    if (distance === k) {
      result.push(parent.val!);
      break;
    }
    dfs(parent, distance, k, result, visited);
    distance++;
    parent = map.get(parent.val)!;
  }
  return result;
}

function createMap(
  node: TreeNode | null,
  parent: TreeNode | null,
  map: Map<number, TreeNode | null>,
) {
  if (node === null) {
    return;
  }
  map.set(node.val, parent);
  createMap(node.left, node, map);
  createMap(node.right, node, map);
}

function dfs(
  node: TreeNode | null,
  distance: number,
  k: number,
  result: number[],
  visited: Set<number>,
) {
  if (node === null || visited.has(node.val)) {
    return;
  }
  visited.add(node.val);
  if (distance === k) {
    result.push(node.val);
    return;
  }
  dfs(node.left, distance + 1, k, result, visited);
  dfs(node.right, distance + 1, k, result, visited);
}
