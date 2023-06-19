import { TreeNode } from "../common";

export function maxLevelSum(root: TreeNode | null): number {
  let queue: { level: number; node: TreeNode }[] = [{ level: 0, node: root! }];
  let levelSums: number[] = [];
  while (queue.length) {
    const nodeLevel = queue.pop()!;
    if (levelSums.length === nodeLevel.level) {
      levelSums[nodeLevel.level] = 0;
    }
    levelSums[nodeLevel.level] += nodeLevel.node.val;
    if (nodeLevel.node.left !== null) {
      queue.push({
        node: nodeLevel.node.left,
        level: nodeLevel.level + 1,
      });
    }
    if (nodeLevel.node.right !== null) {
      queue.push({
        node: nodeLevel.node.right,
        level: nodeLevel.level + 1,
      });
    }
  }
  let levelIndex = 0;
  for (let i = 0; i < levelSums.length; i++) {
    if (levelSums[i] > levelSums[levelIndex]) {
      levelIndex = i;
    }
  }

  return levelIndex + 1;
}
