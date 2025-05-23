import { Heap } from "../../../hard-collection/design/heap/heap";

export function maxRemoval(nums: number[], queries: number[][]): number {
  // sort by left endpoint
  queries.sort((a, b) => a[0] - b[0]);

  const n = nums.length;
  const m = queries.length;

  // difference array for “kept” count
  const delta = new Array<number>(n + 1).fill(0);
  let operations = 0;

  // max-heap of right endpoints
  // we want to pop the largest end first, so comparator is (a, b) => b - a
  const heap = new Heap<number>((a, b) => b - a);

  let j = 0;
  for (let i = 0; i < n; i++) {
    // apply any scheduled “end” of kept intervals
    operations += delta[i];

    // push all queries starting at i
    while (j < m && queries[j][0] === i) {
      heap.push(queries[j][1]);
      j++;
    }

    // we need at least nums[i] covering intervals kept so far
    while (operations < nums[i] && !heap.isEmpty() && heap.top()! >= i) {
      // keep this interval
      operations++;
      const r = heap.pop()!;
      // schedule its end
      delta[r + 1] -= 1;
    }

    // if we still can’t cover nums[i], impossible
    if (operations < nums[i]) {
      return -1;
    }
  }

  // any intervals left in the heap were never “kept” -> removable
  return heap.size();
}
