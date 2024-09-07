import { TreeNode } from "../common";

export function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let tree1Leafs: number[] = getTreeLeafs(root1);
  let tree2Leafs: number[] = getTreeLeafs(root2);

  return compareArrays(tree1Leafs, tree2Leafs);
}

function getTreeLeafs(tree: TreeNode | null): number[] {
  if (tree === null) {
    return [];
  }
  let result: number[] = [];
  if (tree.left === null && tree.right === null) {
    result.push(tree.val);
  }
  result = [...result, ...getTreeLeafs(tree.left)];
  result = [...result, ...getTreeLeafs(tree.right)];
  return result;
}

function compareArrays(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((v, i) => v === arr2[i]);
}
