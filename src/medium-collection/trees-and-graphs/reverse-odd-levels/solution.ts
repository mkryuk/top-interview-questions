import { TreeNode } from "../common";

export function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }
  const queue: TreeNode[] = [root];
  let start = 0;
  let level = 0;

  while (start < queue.length) {
    const levelSize = queue.length - start;
    const currentLevel: TreeNode[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue[start++];
      currentLevel.push(node);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    if (level % 2 === 1) {
      reverseLevelValues(currentLevel);
    }
    level++;
  }
  return root;
}
function reverseLevelValues(levelNodes: TreeNode[]) {
  let left = 0;
  let right = levelNodes.length - 1;
  while (left < right) {
    [levelNodes[left].val, levelNodes[right].val] = [levelNodes[right].val, levelNodes[left].val];
    left++;
    right--;
  }
}
