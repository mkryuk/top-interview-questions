import { Heap } from "../../design/heap/heap";

export function minimumPairRemoval(nums: number[]): number {
  const length: number = nums.length;
  if (length <= 1) {
    return 0;
  }

  // current values; merged sums are written back into the left index of the merged pair
  const values: number[] = nums.slice();

  // linked-list pointers over indices (alive indices only)
  const prevIndex: number[] = new Array<number>(length).fill(-1);
  const nextIndex: number[] = new Array<number>(length).fill(-1);

  for (let index = 0; index < length; index++) {
    prevIndex[index] = index - 1;
    nextIndex[index] = index + 1 < length ? index + 1 : -1;
  }

  // heap item: [pairSum, leftIndex]
  type Pair = [number, number];

  const compareCandidates = (a: Pair, b: Pair): number => {
    // smaller sum first
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    // leftmost (smaller leftIndex) first
    return a[1] - b[1];
  };

  const heap: Heap<Pair> = new Heap<Pair>(compareCandidates);

  // seed heap with initial adjacent pair sums
  for (let left = 0; left < length - 1; left++) {
    heap.push([values[left] + values[left + 1], left]);
  }

  // count adjacent violations: values[x] > values[next(x)]
  let inversions: number = 0;
  for (let left = 0; left < length - 1; left++) {
    if (values[left] > values[left + 1]) {
      inversions++;
    }
  }

  let result: number = 0;

  while (inversions > 0) {
    const candidate: Pair | null = heap.pop();
    if (candidate === null) {
      break;
    }

    const pairSum: number = candidate[0];
    const left: number = candidate[1];
    const right: number = nextIndex[left];

    // stale candidate: left has no right neighbor anymore
    if (right === -1) {
      continue;
    }

    // stale candidate: right is no longer directly after left
    if (prevIndex[right] !== left) {
      continue;
    }

    // stale candidate: values changed since candidate was pushed
    if (values[left] + values[right] !== pairSum) {
      continue;
    }

    const leftNeighbor: number = prevIndex[left];
    const rightNeighbor: number = nextIndex[right];

    // remove old inversion contributions for edges that are about to change
    if (leftNeighbor !== -1 && values[leftNeighbor] > values[left]) {
      inversions--;
    }
    if (values[left] > values[right]) {
      inversions--;
    }
    if (rightNeighbor !== -1 && values[right] > values[rightNeighbor]) {
      inversions--;
    }

    // merge (left, right) into left
    values[left] = pairSum;

    // relink: left -> rightNeighbor, and detach right
    nextIndex[left] = rightNeighbor;
    if (rightNeighbor !== -1) {
      prevIndex[rightNeighbor] = left;
    }
    prevIndex[right] = -1;
    nextIndex[right] = -1;

    // add new inversion contributions for new/updated edges
    if (leftNeighbor !== -1 && values[leftNeighbor] > values[left]) {
      inversions++;
    }
    if (rightNeighbor !== -1 && values[left] > values[rightNeighbor]) {
      inversions++;
    }

    // push newly formed adjacent pair candidates around the merged position
    if (leftNeighbor !== -1) {
      heap.push([values[leftNeighbor] + values[left], leftNeighbor]);
    }
    if (rightNeighbor !== -1) {
      heap.push([values[left] + values[rightNeighbor], left]);
    }

    result++;
  }

  return result;
}
