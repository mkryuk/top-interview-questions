import { TreeNode } from "../common";

export function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const levelSum: number[] = [];
  let queue: TreeNode[] = [];
  queue.push(root);
  const parentSum = new Map<TreeNode, number>();
  parentSum.set(root, root.val);
  while (queue.length > 0) {
    const levelSize = queue.length;
    let sum = 0;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      sum += node.val;
      if (node.left !== null) {
        queue.push(node.left);
        parentSum.set(node.left, node.left.val + (node.right?.val ?? 0));
      }
      if (node.right !== null) {
        queue.push(node.right);
        parentSum.set(node.right, node.right.val + (node.left?.val ?? 0));
      }
    }
    levelSum.push(sum);
  }

  const levelStack: [TreeNode, number][] = [];
  levelStack.push([root, 0]);
  while (levelStack.length > 0) {
    const [node, level] = levelStack.pop()!;
    node.val = levelSum[level] - parentSum.get(node)!;
    if (node.left !== null) {
      levelStack.push([node.left, level + 1]);
    }
    if (node.right !== null) {
      levelStack.push([node.right, level + 1]);
    }
  }

  return root;
}
