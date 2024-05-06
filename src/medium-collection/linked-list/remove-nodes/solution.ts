import { ListNode } from "../common";

export function removeNodes(head: ListNode | null): ListNode | null {
  head = reverseNodes(head);
  let temp = head;
  let maxNodeVal = temp!.val;
  while (temp !== null && temp.next !== null) {
    let next = temp.next;
    if (maxNodeVal > next.val) {
      temp.next = temp.next?.next ?? null;
    } else {
      maxNodeVal = next.val;
      temp = temp.next;
    }
  }
  head = reverseNodes(head);
  return head;
}

function reverseNodes(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr !== null) {
    const next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
