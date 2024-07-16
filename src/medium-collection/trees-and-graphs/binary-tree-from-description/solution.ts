import { TreeNode } from "../common";

export function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes: Map<number, TreeNode> = new Map();
  const children: Set<number> = new Set();

  for (const [parentVal, childVal, isLeft] of descriptions) {
    if (!nodes.has(parentVal)) {
      nodes.set(parentVal, new TreeNode(parentVal));
    }
    if (!nodes.has(childVal)) {
      nodes.set(childVal, new TreeNode(childVal));
    }

    const parentNode = nodes.get(parentVal)!;
    const childNode = nodes.get(childVal)!;

    if (isLeft === 1) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    children.add(childVal);
  }

  let root: TreeNode | null = null;
  for (const [val, node] of nodes) {
    if (!children.has(val)) {
      root = node;
      break;
    }
  }

  return root;
}
