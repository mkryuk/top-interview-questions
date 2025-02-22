import { TreeNode } from "../common";

export function recoverFromPreorder(traversal: string): TreeNode | null {
  let i = 0;
  let stack: TreeNode[] = [];
  while (i < traversal.length) {
    let depth = 0;
    // find the depth
    while (i < traversal.length && traversal[i] === "-") {
      depth++;
      i++;
    }

    // get node value
    let val = 0;
    while (i < traversal.length && traversal[i] !== "-") {
      val = val * 10 + parseInt(traversal[i]);
      i++;
    }
    const node = new TreeNode(val);

    // if stack length equal to depth it is the left child
    if (depth === stack.length) {
      if (stack.length > 0) {
        stack[stack.length - 1].left = node;
      }
    } else {
      // otherwise we go up and set the right child
      while (stack.length > depth) {
        stack.pop();
      }
      stack[stack.length - 1].right = node;
    }

    stack.push(node);
  }
  return stack[0];
}
