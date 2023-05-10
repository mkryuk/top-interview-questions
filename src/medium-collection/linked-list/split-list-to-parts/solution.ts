import { ListNode } from "../common";

export function splitListToParts(
  head: ListNode | null,
  k: number,
): Array<ListNode | null> {
  let count = 0;
  let currentNode = head;
  while (currentNode) {
    count++;
    currentNode = currentNode.next;
  }
  let num = Math.trunc(count / k);
  let rest = count % k;
  let result: Array<ListNode | null> = [];
  currentNode = head;
  for (let i = 0; i < k; i++) {
    let node = new ListNode(0);
    let cursor = node;
    for (let j = 0; j < num + (i < rest ? 1 : 0); j++) {
      cursor.next = new ListNode(currentNode!.val);
      cursor = cursor.next;
      if (currentNode !== null) {
        currentNode = currentNode.next;
      }
    }
    result.push(node.next);
  }
  return result;
}
