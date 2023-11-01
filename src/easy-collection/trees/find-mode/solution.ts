import { TreeNode } from "../common";

export function findMode(root: TreeNode | null): number[] {
  let queue = [root];
  const map = new Map<number, number>();
  while (queue.length > 0) {
    const node = queue.pop()!;
    const key = node.val;
    if (!map.has(key)) {
      map.set(key, 0);
    }
    map.set(key, map.get(key)! + 1);
    if (node.left) {
      queue.unshift(node.left);
    }
    if (node.right) {
      queue.unshift(node.right);
    }
  }
  let maxCount = 0;
  for (const value of map.values()) {
    if (value > maxCount) {
      maxCount = value;
    }
  }
  let result: number[] = [];
  for (const [key, value] of map) {
    if (value === maxCount) {
      result.push(key);
    }
  }
  return result;
}
