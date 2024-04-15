import { TreeNode } from "../common";

export function sumNumbers(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const stack: [TreeNode, number][] = [[root, root.val]];
  let result = 0;
  while (stack.length > 0) {
    const [node, num] = stack.pop()!;
    if (node.left === null && node.right === null) {
      result += num;
    }
    if (node.left !== null) {
      stack.push([node.left, num * 10 + node.left.val]);
    }
    if (node.right !== null) {
      stack.push([node.right, num * 10 + node.right.val]);
    }
  }

  return result;
}
