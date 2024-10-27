import { TreeNode } from "../common";

export function treeQueries(root: TreeNode | null, queries: number[]): number[] {
  const resultMap = new Map<number, number>();
  dfs(root, 0, 0, new Map<TreeNode, number>(), resultMap);
  const result: number[] = [];
  for (let i = 0; i < queries.length; i++) {
    result[i] = resultMap.get(queries[i])!;
  }
  return result;
}

function getHeight(node: TreeNode | null, heightsCache: Map<TreeNode, number>): number {
  if (node === null) {
    return -1;
  }

  if (heightsCache.has(node)) {
    return heightsCache.get(node)!;
  }

  let left = getHeight(node.left, heightsCache);
  let right = getHeight(node.right, heightsCache);
  const height = Math.max(left, right) + 1;
  heightsCache.set(node, height);
  return height;
}

function dfs(
  node: TreeNode | null,
  depths: number,
  maxVal: number,
  heightsCache: Map<TreeNode, number>,
  resultMap: Map<number, number>,
) {
  if (node === null) {
    return;
  }
  resultMap.set(node.val, maxVal);
  dfs(
    node.left,
    depths + 1,
    Math.max(maxVal, depths + 1 + getHeight(node.right, heightsCache)!),
    heightsCache,
    resultMap,
  );
  dfs(
    node.right,
    depths + 1,
    Math.max(maxVal, depths + 1 + getHeight(node.left, heightsCache)!),
    heightsCache,
    resultMap,
  );
}
