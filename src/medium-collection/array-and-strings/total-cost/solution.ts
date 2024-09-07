import { Heap } from "../../../hard-collection/design/heap/heap";

export function totalCost(costs: number[], k: number, candidates: number): number {
  let leftQueue = new Heap<number>((a, b) => a - b);
  let rightQueue = new Heap<number>((a, b) => a - b);

  // leftQueue stores the first k workers.
  // rightQueue stores at most last k workers without any workers from the first k workers.
  for (let i = 0; i < candidates; i++) {
    leftQueue.insert(costs[i]);
  }
  for (let i = Math.max(candidates, costs.length - candidates); i < costs.length; i++) {
    rightQueue.insert(costs[i]);
  }

  let result = 0;
  let leftIndex = candidates;
  let rightIndex = costs.length - 1 - candidates;

  for (let i = 0; i < k; i++) {
    if (rightQueue.isEmpty() || (!leftQueue.isEmpty() && leftQueue.top()! <= rightQueue.top()!)) {
      result += leftQueue.pop()!;

      // Only refill the queue if there are workers outside the two queues.
      if (leftIndex <= rightIndex) {
        leftQueue.insert(costs[leftIndex]);
        leftIndex++;
      }
    } else {
      result += rightQueue.pop()!;

      // Only refill the queue if there are workers outside the two queues.
      if (leftIndex <= rightIndex) {
        rightQueue.insert(costs[rightIndex]);
        rightIndex--;
      }
    }
  }

  return result;
}
