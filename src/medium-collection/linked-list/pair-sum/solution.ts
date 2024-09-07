import { ListNode } from "../common";

export function pairSum(head: ListNode | null): number {
  let nodes: number[] = [];
  while (head !== null) {
    nodes.push(head.val);
    head = head.next;
  }

  const middle = nodes.length / 2;
  let result = 0;
  for (let left = middle - 1, right = middle; right < nodes.length; left--, right++) {
    result = Math.max(result, nodes[left] + nodes[right]);
  }

  return result;
}
