import { ListNode } from "../common";

export function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, head);

  const prefixSumMap = new Map<number, ListNode>();
  let prefixVal = 0;
  for (let node: ListNode | null = dummy; node !== null; node = node.next) {
    prefixVal += node.val;
    prefixSumMap.set(prefixVal, node);
  }

  prefixVal = 0;
  for (let node: ListNode | null = dummy; node !== null; node = node.next) {
    prefixVal += node.val;
    if (prefixSumMap.has(prefixVal)) {
      node.next = prefixSumMap.get(prefixVal)!.next;
    }
  }

  return dummy.next;
}
