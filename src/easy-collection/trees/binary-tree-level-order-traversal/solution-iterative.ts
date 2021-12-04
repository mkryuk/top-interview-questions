import { TreeNode } from "../common";

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }
  let queue: (TreeNode | null)[] = [root];
  let level = 0;
  let result: number[][] = [];
  while (queue.length) {
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      if (result.length === level) {
        result[level] = [];
      }
      let node = queue.shift();
      if (node) {
        result[level].push(node.val);
      }
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
    level++;
  }
  return result;
}
