import { TreeNode } from "../common";

export function tree2str(root: TreeNode | null): string {
  let result = "";
  if (root === null) {
    return "";
  }
  result = root.val.toString();
  if (root.left || root.right) {
    result += `(${tree2str(root.left)})`;
  }
  if (root.right) {
    result += `(${tree2str(root.right)})`;
  }
  return result;
}
