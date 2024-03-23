import { ListNode } from "../common";

let first: ListNode | null = null;
export function reorderList(head: ListNode | null): void {
  if (head === null) {
    return;
  }
  // Use a stack to keep track of all nodes in the list.
  const stack: ListNode[] = [];
  let node: ListNode | null = head;

  // Iterate through the list and push all nodes into the stack.
  while (node !== null) {
    stack.push(node);
    node = node.next;
  }

  // Use two pointers to access the first and last elements in the stack,
  let first = 0;
  let last = stack.length - 1;

  // Start with the head of the list.
  node = head;

  // Reorder the list by alternating nodes from the start and end,
  while (first < last) {
    // Keep a reference to the next node of the current starting node.
    let second = stack[first].next;

    // Set the next of the current node to the last node in the list.
    node!.next = stack[last];

    // Then set the next of the last node to what was originally the next of the current node.
    stack[last].next = second;

    // Move the "node" pointer forward.
    node = second;

    // Move the first and last pointers towards the center.
    first++;
    last--;
  }

  // Finally, ensure the last node in the reordered list points to null
  stack[first].next = null;
}
