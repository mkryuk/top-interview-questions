import { ListNode } from "../common";

export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  let pA = headA;
  let pB = headB;
  // we treat two linked lists as a one
  // like:
  // a 1-2-3\
  //       c 5-6-7
  //     b 4/
  // one pointer that goes over a -> c -> b
  // 1->2->3->5->6->7->4->5->6->7
  // and the other that goes over b -> c -> a
  // 4->5->6->7->1->2->3->5->6->7
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
  // Note: In the case lists do not intersect, the pointers for A and B
  // will still line up in the 2nd iteration, just that here won't be
  // a common node down the list and both will reach their respective ends
  // at the same time. So pA will be NULL in that case.
}
