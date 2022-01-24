import { Node } from "../common";

export function connect(root: Node | null): Node | null {
  let queue = [root];
  while (queue.length) {
    const queueLength = queue.length;
    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      if (node && i < queueLength - 1) {
        // we have right node
        // of the same level
        // on top of the queue
        node.next = queue[0];
      }
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
  }
  return root;
}
