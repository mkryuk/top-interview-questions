import { ListNode } from "../common";

export function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let prevVal = head!.val;
  let temp = head!.next;
  let min = Infinity;
  let max = -1;
  let currentIndex = 0;
  let firstFound = -1;
  let lastFound = -1;
  while (temp !== null) {
    currentIndex++;
    if (!isLocalMinMax(prevVal, temp)) {
      prevVal = temp.val;
      temp = temp.next;
      continue;
    }
    if (firstFound === -1) {
      firstFound = currentIndex;
    }
    if (lastFound !== -1) {
      min = Math.min(min, currentIndex - lastFound);
      max = currentIndex - firstFound;
    }
    lastFound = currentIndex;
    prevVal = temp.val;
    temp = temp.next;
  }
  return [min === Infinity ? -1 : min, max];
}

function isLocalMinMax(prev: number, node: ListNode): boolean {
  return (
    (node !== null && node.next !== null && node.val < prev && node.val < node.next.val) ||
    (node !== null && node.next !== null && node.val > prev && node.val > node.next.val)
  );
}
