import { ListNode } from "../common";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const listArray: ListNode[] = [];
  while (head) {
    listArray.push(head);
    head = head.next;
  }
  if (listArray.length === 1) {
    return null;
  }
  // we remove node from the head
  if (listArray.length - 1 - n === -1) {
    return listArray[1];
  }
  listArray[listArray.length - 1 - n].next =
    listArray[listArray.length - n].next;
  return listArray[0];
}
