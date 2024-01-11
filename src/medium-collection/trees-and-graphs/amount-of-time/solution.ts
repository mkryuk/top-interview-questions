import { TreeNode } from "../common";

export function amountOfTime(root: TreeNode | null, start: number): number {
  let graph = new Map<number, number[]>();
  createGraph(root, null, graph);
  let result = -1;
  let queue: number[] = [start];
  let visited = new Set<number>(queue);
  while (queue.length > 0) {
    result++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      for (let neighbor of graph.get(node)!) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
  return result;
}

function createGraph(
  node: TreeNode | null,
  parent: TreeNode | null,
  graph: Map<number, number[]>,
) {
  if (node === null) {
    return;
  }
  if (!graph.has(node.val)) {
    graph.set(node.val, []);
  }
  if (parent !== null) {
    graph.get(node.val)?.push(parent.val);
    graph.get(parent.val)?.push(node.val);
  }
  createGraph(node.left, node, graph);
  createGraph(node.right, node, graph);
}

export function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const currentNode = queue.shift();

    if (currentNode !== undefined && arr[i] !== null) {
      currentNode.left = new TreeNode(arr[i]!);
      queue.push(currentNode.left);
    }
    i++;

    if (currentNode !== undefined && arr[i] !== null) {
      currentNode.right = new TreeNode(arr[i]!);
      queue.push(currentNode.right);
    }
    i++;
  }

  return root;
}
