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
  n: number,
): TreeNode | null {
  if (i < n) {
    const element = nodes[i];
    if (element !== null) {
      root = new TreeNode(element);
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

export function treeNodeToArray(root: TreeNode | null): (number | null)[] {
  if (!root) {
    return [];
  }
  let result: (number | null)[] = [];
  let queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    let node = queue.shift();
    result.push(node?.val ?? null);
    if (node?.left || node?.right) {
      queue.push(node.left || null);
      queue.push(node.right || null);
    }
  }
  return result;
}

// Definition for Node.
export class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export function nodeToArray(root: Node | null): (number | string)[] {
  if (!root) {
    return [];
  }
  let result: (number | string)[] = [];
  let queue: (Node | null)[] = [root];
  while (queue.length) {
    let node = queue.shift();
    result.push(node?.val ?? "#");
    if (node?.left || node?.right) {
      queue.push(node.left || null);
      queue.push(node.right || null);
    }
    if (node?.next === null) {
      result.push("#");
    }
  }
  return result;
}

function createNodeLevel(
  nodes: (number | null)[],
  root: Node | null,
  i: number,
  n: number,
): Node | null {
  if (i < n) {
    const element = nodes[i];
    if (element !== null) {
      root = new Node(element);
      root.left = createNodeLevel(nodes, root.left, 2 * i + 1, n);
      root.right = createNodeLevel(nodes, root.right, 2 * i + 2, n);
      root.next = null;
    } else {
      return null;
    }
  }
  return root;
}

export function arrayToNode(nodes: (number | null)[]): Node | null {
  let root: Node | null = null;
  root = createNodeLevel(nodes, root, 0, nodes.length);
  return root;
}
