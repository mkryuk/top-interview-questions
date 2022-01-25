import { Node } from "../common";

export function connect(root: Node | null): Node | null {
  let leftNode = root;
  // when we reach the bottom level, we are done
  while (leftNode && leftNode.left) {
    let node: Node | null = leftNode;
    while (node) {
      // connect left and right subnodes
      if (node.left) {
        node.left.next = node.right;
      }
      // connect right subnode and
      // left subnode of the next node
      if (node.next && node.right) {
        node.right.next = node.next.left;
      }
      node = node.next;
    }
    leftNode = leftNode?.left || null;
  }
  return root;
}
