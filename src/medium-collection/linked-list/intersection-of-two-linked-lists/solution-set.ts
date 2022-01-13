import { ListNode } from "../common";

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let set = new Set<ListNode | null>();
  let tempA = headA;
  let tempB = headB;
  while (tempA) {
    set.add(tempA);
    tempA = tempA.next;
  }
  while (tempB) {
    if (set.has(tempB)) {
      return tempB;
    }
    set.add(tempB);
    tempB = tempB.next;
  }
  return null;
}
