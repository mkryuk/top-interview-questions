import { TreeNode } from "../common";

export function minimumOperations(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  let queue: TreeNode[] = [root];
  let index = 0;
  let result = 0;
  while (queue.length - index > 0) {
    let levelSize = queue.length - index;
    let level: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue[index++];
      level.push(node.val);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    result += minSwapsToSort(level);
  }
  return result;
}

function minSwapsToSort(nodes: number[]): number {
  let operations = 0;
  const sorted = [...nodes].sort((a, b) => a - b);
  const indexMap = new Map<number, number>();
  for (let i = 0; i < sorted.length; i++) {
    indexMap.set(sorted[i], i);
  }
  const visited = new Set();
  for (let i = 0; i < nodes.length; i++) {
    if (indexMap.get(nodes[i])! === i || visited.has(i)) {
      continue;
    }
    let j = i;
    let cycleCount = 0;
    while (!visited.has(j)) {
      visited.add(j);
      j = indexMap.get(nodes[j])!;
      cycleCount++;
    }
    operations += Math.max(0, cycleCount - 1);
  }

  return operations;
}
