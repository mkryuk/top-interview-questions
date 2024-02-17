import { Heap } from "../../../hard-collection/design/heap/heap";

export function furthestBuilding(
  heights: number[],
  bricks: number,
  ladders: number,
): number {
  let minHeap = new Heap<number>((a, b) => a - b);
  const n = heights.length;
  for (let i = 0; i < n - 1; i++) {
    const diff = heights[i + 1] - heights[i];
    if (diff > 0) {
      minHeap.push(diff);
    }
    if (minHeap.size() > ladders) {
      let minDiff = minHeap.pop()!;
      bricks -= minDiff;
    }
    if (bricks < 0) {
      return i;
    }
  }
  return n - 1;
}
