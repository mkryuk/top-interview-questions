import { ListNode } from "../common";

export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }
  let arrayList: ListNode[] = [];
  let temp: ListNode | null = head;
  while (temp) {
    if (arrayList.indexOf(temp) !== -1) {
      return true;
    }
    arrayList.push(temp);
    temp = temp.next;
  }
  return false;
}
