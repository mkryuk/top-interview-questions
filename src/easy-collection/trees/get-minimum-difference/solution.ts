import { TreeNode } from "../common";

export function getMinimumDifference(root: TreeNode | null): number {
  const queue = [root];
  const nodes: number[] = [];
  while (queue.length) {
    const node = queue.pop();
    nodes.push(node!.val);
    if (node!.left !== null) {
      queue.push(node!.left);
    }
    if (node!.right !== null) {
      queue.push(node!.right);
    }
  }
  nodes.sort((a, b) => a - b);
  let result = Infinity;
  for (let i = 1; i < nodes.length; i++) {
    result = Math.min(result, nodes[i] - nodes[i - 1]);
  }
  return result;
}
