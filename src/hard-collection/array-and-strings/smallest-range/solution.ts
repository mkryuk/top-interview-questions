import { Heap } from "../../design/heap/heap";

class HeapNode {
  value: number;
  row: number;
  idx: number;
  constructor(value: number, row: number, idx: number) {
    this.value = value;
    this.row = row;
    this.idx = idx;
  }
}

export function smallestRange(nums: number[][]): number[] {
  let result = [-Infinity, Infinity];
  let minHeap = new Heap<HeapNode>((a, b) => a.value - b.value);
  let maxValue = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i][0];
    minHeap.push(new HeapNode(value, i, 0));
    maxValue = Math.max(maxValue, value);
  }

  while (minHeap.size() === nums.length) {
    const { value: minValue, row, idx } = minHeap.extractRoot()!;
    if (
      maxValue - minValue < result[1] - result[0] ||
      (maxValue - minValue === result[1] - result[0] && minValue < result[0])
    ) {
      result = [minValue, maxValue];
    }

    if (idx + 1 < nums[row].length) {
      const nextNode = new HeapNode(nums[row][idx + 1], row, idx + 1);
      maxValue = Math.max(maxValue, nextNode.value);
      minHeap.push(nextNode);
    }
  }

  return result;
}
