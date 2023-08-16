import { ListNode } from "../common";

export function partition(head: ListNode | null, x: number): ListNode | null {
  let left = new ListNode();
  let right = new ListNode();
  let headNode = head;
  // create two partitions for storing nodes
  let leftNode = left;
  let rightNode = right;
  while (headNode) {
    // take current node
    const node = headNode;
    // move head forward
    headNode = headNode.next;
    // isolate current node
    node.next = null;
    if (node.val < x) {
      leftNode.next = node;
      leftNode = leftNode.next;
    } else {
      rightNode.next = node;
      rightNode = rightNode.next;
    }
  }
  // link two partitions together
  leftNode.next = right.next;
  return left.next;
}
