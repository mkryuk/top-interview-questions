import { ListNode } from "../common";

export function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  let numsSet = new Set(nums);
  let result = new ListNode();
  result.next = head;
  let prev = result;
  let current = head;
  while (current !== null) {
    if (numsSet.has(current.val)) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return result.next;
}
