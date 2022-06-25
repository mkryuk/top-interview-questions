import { Node } from "../common";
export function copyRandomList(head: Node | null): Node | null {
  let copyHead = new Node();
  let node = head;
  let nodeRndIndex = new Map<Node, number | null>();
  let indexNode = new Map<number | null, Node>();
  let index = 0;
  let currentNode: Node | null = copyHead;
  while (node) {
    currentNode.next = new Node(node.val);
    const nodeIndex = getIndexByNode(head, node.random)!;
    nodeRndIndex.set(currentNode.next, nodeIndex);
    indexNode.set(index++, currentNode.next);
    currentNode = currentNode.next;
    node = node.next;
  }
  currentNode = copyHead.next;
  node = head;
  while (currentNode) {
    const rndIndex = nodeRndIndex.get(currentNode)!;
    currentNode.random = rndIndex !== null ? indexNode.get(rndIndex)! : null;
    currentNode = currentNode.next;
  }
  return copyHead.next;
}

function getIndexByNode(list: Node | null, node: Node | null): number | null {
  if (node === null) {
    return null;
  }
  let step: Node | null = list;
  let i = 0;
  while (step && step !== node) {
    step = step.next;
    i++;
  }
  return step ? i : null;
}
