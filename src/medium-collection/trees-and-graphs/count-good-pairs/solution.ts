import { TreeNode } from "../common";

export function countPairs(root: TreeNode | null, distance: number): number {
  let result = 0;

  function dfs(node: TreeNode | null): number[] {
    if (!node) {
      return [];
    }

    if (!node.left && !node.right) {
      return [1];
    }

    const leftDistances = dfs(node.left);
    const rightDistances = dfs(node.right);

    // count pairs
    for (const ld of leftDistances) {
      for (const rd of rightDistances) {
        if (ld + rd <= distance) {
          result++;
        }
      }
    }

    // return distances incremented by 1 for the parent node
    const newDistances = [...leftDistances, ...rightDistances].map((d) => d + 1);
    return newDistances;
  }

  dfs(root);
  return result;
}
