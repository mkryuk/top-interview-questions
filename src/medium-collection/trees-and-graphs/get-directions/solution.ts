import { TreeNode } from "../common";

export function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  let startPath: string[] = [];
  let destPath: string[] = [];
  dfs(root, startValue, destValue, [], startPath, destPath);
  let i = 0;
  let j = 0;
  while (i < startPath.length && j < destPath.length && startPath[i] === destPath[j]) {
    i++;
    j++;
  }
  let result: string[] = [];
  for (let k = i; k < startPath.length; k++) {
    result.push("U");
  }
  for (let k = j; k < destPath.length; k++) {
    result.push(destPath[k]);
  }
  return result.join("");
}

function dfs(
  node: TreeNode | null,
  startValue: number,
  destValue: number,
  currentPath: string[],
  startPath: string[],
  destPath: string[],
) {
  if (node === null) {
    return;
  }
  if (node.val === startValue) {
    startPath.push(...currentPath);
  }
  if (node.val === destValue) {
    destPath.push(...currentPath);
  }
  currentPath.push("L");
  dfs(node.left, startValue, destValue, currentPath, startPath, destPath);
  currentPath.pop();
  currentPath.push("R");
  dfs(node.right, startValue, destValue, currentPath, startPath, destPath);
  currentPath.pop();
}
