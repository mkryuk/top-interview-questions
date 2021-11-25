// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function createTreeLevel(
  nodes: (number | null)[],
  root: TreeNode | null,
  i: number,
  n: number
): TreeNode | null {
  if (i < n) {
    const element = nodes[i];
    if (element !== null) {
      let temp: TreeNode = new TreeNode(element);
      root = temp;
      root.left = createTreeLevel(nodes, root.left, 2 * i + 1, n);
      root.right = createTreeLevel(nodes, root.right, 2 * i + 2, n);
    } else {
      return null;
    }
  }
  return root;
}

export function arrayToTreeNode(nodes: (number | null)[]): TreeNode | null {
  let root: TreeNode | null = null;
  root = createTreeLevel(nodes, root, 0, nodes.length);
  return root;
}
