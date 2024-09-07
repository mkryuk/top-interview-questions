import { TreeNode } from "../common";

export function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let root1Nodes: (number | null)[] = [];
  let root2Nodes: (number | null)[] = [];
  dfs(root1, root1Nodes);
  dfs(root2, root2Nodes);
  return equals(root1Nodes, root2Nodes);
}

function equals(left: (number | null)[], right: (number | null)[]) {
  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}

function dfs(node: TreeNode | null, nodes: (number | null)[]): void {
  if (node === null) {
    return;
  }
  nodes.push(node.val);
  const leftVal = node.left?.val ?? -1;
  const rightVal = node.right?.val ?? -1;
  if (leftVal < rightVal) {
    dfs(node.left, nodes);
    dfs(node.right, nodes);
  } else {
    dfs(node.right, nodes);
    dfs(node.left, nodes);
  }
  nodes.push(null);
}
