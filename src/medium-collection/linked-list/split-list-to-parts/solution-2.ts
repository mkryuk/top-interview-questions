import { ListNode } from "../common";

export function splitListToParts(
  head: ListNode | null,
  k: number,
): Array<ListNode | null> {
  let currentNode: ListNode | null = head;
  let count = 0;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    count++;
  }

  let num = Math.floor(count / k);
  let rest = count % k;

  let result: Array<ListNode | null> = new Array(k).fill(null);
  currentNode = head;
  for (let i = 0; i < k; i++) {
    let node: ListNode | null = currentNode;
    for (let j = 0; j < num + (i < rest ? 1 : 0) - 1; j++) {
      if (currentNode !== null) {
        currentNode = currentNode.next;
      }
    }
    if (currentNode !== null) {
      let prev: ListNode | null = currentNode;
      currentNode = currentNode.next;
      if (prev !== null) {
        prev.next = null;
      }
    }
    result[i] = node;
  }
  return result;
}
