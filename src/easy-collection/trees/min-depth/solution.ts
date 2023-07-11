import { TreeNode } from "../common";

export function minDepth(root: TreeNode | null): number {
  let result = 0;
  let stack: [TreeNode | null, number][] = [[root, 1]];
  while (stack.length) {
    let [node, level] = stack.shift() ?? [null, 0];
    if (node === null) {
      continue;
    }
    if (node?.left === null && node?.right === null) {
      result = level;
      break;
    }
    if (node?.left) {
      stack.push([node.left, level + 1]);
    }
    if (node?.right) {
      stack.push([node.right, level + 1]);
    }
  }
  return result;
}
