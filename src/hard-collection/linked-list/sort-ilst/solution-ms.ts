import { ListNode } from "../common";

export function sortList(head: ListNode | null): ListNode | null {
  // if there is no element or only one - return it
  if (head === null || head.next === null) {
    return head;
  }
  const mid = splitList(head);
  const left = sortList(head);
  const right = sortList(mid);
  const result = mergeLists(left, right);
  return result;
}

function splitList(head: ListNode | null): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head?.next?.next ?? null;
  while (fast) {
    slow = slow?.next ?? null;
    fast = fast.next?.next ?? null;
  }
  let mid = slow!.next;
  slow!.next = null;
  return mid;
}

function mergeLists(left: ListNode | null, right: ListNode | null): ListNode | null {
  let head = new ListNode();
  let tail = head;
  while (left && right) {
    if (left.val < right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }
    tail = tail.next;
  }
  tail.next = left !== null ? left : right;
  return head.next;
}
