import { ListNode } from "../common";

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  const [root] = reverseListRecursive(head);
  return root;
}

function reverseListRecursive(head: ListNode): [ListNode, ListNode | null] {
  if (head && head.next) {
    const [root, node] = reverseListRecursive(head.next);
    if (node) {
      head.next = null;
      node.next = head;
    }
    return [root, head];
  }
  return [head, head];
}
