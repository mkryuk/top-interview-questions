import { ListNode } from "../common";

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let arr: number[] = [];
  for (let i = 0; i < lists.length; i++) {
    let l = lists[i];
    while (l) {
      arr.push(l.val);
      l = l.next;
    }
  }
  if (!arr.length) {
    return null;
  }
  arr.sort((a, b) => a - b);
  let result = new ListNode(arr[0]);
  let temp = result;
  for (let i = 1; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }
  return result;
}
