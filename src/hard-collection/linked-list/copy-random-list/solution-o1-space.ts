import { Node } from "../common";
export function copyRandomList(head: Node | null): Node | null {
  let headCopy = head;
  // create duplicate of a list
  // A -> A' -> B -> B'
  while (headCopy) {
    let next = headCopy.next;
    let newNode = new Node(headCopy.val);
    headCopy.next = newNode;
    newNode.next = next;
    headCopy = headCopy.next.next;
  }

  headCopy = head;
  // set random pointers for copied list
  while (headCopy && headCopy.next) {
    headCopy.next.random = headCopy.random?.next ?? null;
    headCopy = headCopy.next.next;
  }

  let result: Node | null = new Node();
  let resultCopy: Node | null = result;
  headCopy = head;
  // separate original and copied lists
  while (headCopy) {
    resultCopy!.next = headCopy.next;
    headCopy.next = headCopy.next?.next ?? null;
    resultCopy = resultCopy?.next ?? null;
    headCopy = headCopy.next;
  }
  return result?.next ?? null;
}
