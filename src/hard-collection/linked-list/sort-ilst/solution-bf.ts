import { ListNode } from "../common";

export function sortList(head: ListNode | null): ListNode | null {
  const temp: number[] = [];
  while (head) {
    temp.push(head.val);
    head = head.next;
  }
  temp.sort((a, b) => a - b);
  const result = new ListNode();
  let tempHead: ListNode | null = result;
  for (let i = 0; i < temp.length; i++) {
    tempHead.next = new ListNode(temp[i]);
    tempHead = tempHead.next;
  }
  return result.next;
}
