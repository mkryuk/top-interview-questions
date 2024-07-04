import { ListNode } from "../common";

export function mergeNodes(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let currentNode = dummy;
  let currentSum = 0;
  let node = head!.next;

  while (node !== null) {
    if (node.val === 0) {
      currentNode.next = new ListNode(currentSum);
      currentNode = currentNode.next;
      currentSum = 0;
    } else {
      currentSum += node.val;
    }
    node = node.next;
  }

  return dummy.next;
}
