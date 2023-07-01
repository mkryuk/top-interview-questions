import { TreeNode } from "../common";

export function pseudoPalindromicPaths(root: TreeNode | null): number {
  return dfs(root, 0);
}

function dfs(node: TreeNode | null, path: number): number {
  if (node === null) {
    return 0;
  }
  let result = 0;
  path = path ^ (1 << node.val);
  if (node.left === null && node.right === null) {
    // check if at most one digit has an odd frequency
    if ((path & (path - 1)) === 0) {
      result++;
    }
  } else {
    result += dfs(node.left, path);
    result += dfs(node.right, path);
  }
  return result;
}
