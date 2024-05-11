import { Heap } from "../../../hard-collection/design/heap/heap";

export function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  let heap = new Heap<{ value: number; numIndex: number; denIndex: number }>(
    (a, b) => a.value - b.value,
  );

  for (let i = 1; i < arr.length; i++) {
    heap.push({ value: arr[0] / arr[i], numIndex: 0, denIndex: i });
  }

  for (let i = 1; i < k; i++) {
    let { numIndex, denIndex } = heap.pop()!;
    if (numIndex + 1 < denIndex) {
      heap.push({
        value: arr[numIndex + 1] / arr[denIndex],
        numIndex: numIndex + 1,
        denIndex: denIndex,
      });
    }
  }

  let { numIndex, denIndex } = heap.pop()!;
  return [arr[numIndex], arr[denIndex]];
}
