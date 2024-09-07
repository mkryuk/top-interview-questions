import { ListNode } from "../common";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let l1Reversed = reverseList(l1);
  let l2Reversed = reverseList(l2);
  let result: number[] = [];
  let index = 0;
  while (l1Reversed || l2Reversed) {
    let sum = 0;
    let currentIndex = index;
    sum = (l1Reversed?.val ?? 0) + (l2Reversed?.val ?? 0) + (result[currentIndex] ?? 0);
    if (sum > 9) {
      result[currentIndex++] = sum % 10;
      sum = Math.trunc(sum / 10);
    }
    result[currentIndex] = sum;
    index++;
    l1Reversed = l1Reversed?.next ?? null;
    l2Reversed = l2Reversed?.next ?? null;
  }
  let resultList = new ListNode();
  let head = resultList;
  while (result.length) {
    head.next = new ListNode(result.pop()!);
    head = head.next;
  }
  return resultList.next;
}

function reverseList(list: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = list;
  let next: ListNode | null = list?.next ?? null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
