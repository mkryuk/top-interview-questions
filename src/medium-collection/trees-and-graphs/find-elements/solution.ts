import { TreeNode } from "../common";

export class FindElements {
  treeValues: Set<number>;
  constructor(root: TreeNode | null) {
    this.treeValues = new Set();
    this.recoverValues(root, 0);
  }

  private recoverValues(node: TreeNode | null, val: number) {
    if (node === null) {
      return;
    }
    node.val = val;
    this.treeValues.add(val);
    if (node.left !== null) {
      this.recoverValues(node.left, val * 2 + 1);
    }
    if (node.right !== null) {
      this.recoverValues(node.right, val * 2 + 2);
    }
  }

  find(target: number): boolean {
    return this.treeValues.has(target);
  }
}
