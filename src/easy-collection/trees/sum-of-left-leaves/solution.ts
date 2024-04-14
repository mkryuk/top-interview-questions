import { TreeNode } from "../common";

export function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let stack: [TreeNode, boolean][] = [[root, false]];
  let result = 0;
  while (stack.length > 0) {
    let [node, isLeft] = stack.pop()!;
    if (isLeft && node.left === null && node.right === null) {
      result += node.val;
    }
    if (node.left !== null) {
      stack.push([node.left, true]);
    }
    if (node.right !== null) {
      stack.push([node.right, false]);
    }
  }

  return result;
}
