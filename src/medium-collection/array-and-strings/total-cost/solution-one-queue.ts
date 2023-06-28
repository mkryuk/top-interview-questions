import { Heap } from "../../../hard-collection/design/heap/heap";

const enum SECTION {
  LEFT,
  RIGHT,
}

export function totalCost(
  costs: number[],
  k: number,
  candidates: number,
): number {
  let priorityQueue = new Heap<number[]>(
    ([leftCost, leftSection], [rightCost, rightSection]) => {
      if (leftCost === rightCost) {
        return leftSection - rightSection;
      }
      return leftCost - rightCost;
    },
  );

  // add left candidates to the queue
  for (let i = 0; i < candidates; i++) {
    priorityQueue.insert([costs[i], SECTION.LEFT]);
  }
  // add right candidates to the queue
  for (
    let i = Math.max(candidates, costs.length - candidates);
    i < costs.length;
    i++
  ) {
    priorityQueue.insert([costs[i], SECTION.RIGHT]);
  }

  let result = 0;
  let leftIndex = candidates;
  let rightIndex = costs.length - 1 - candidates;

  for (let i = 0; i < k; i++) {
    const [cost, section] = priorityQueue.pop()!;
    result += cost;
    if (leftIndex <= rightIndex) {
      if (section === SECTION.LEFT) {
        priorityQueue.push([costs[leftIndex++], SECTION.LEFT]);
      } else {
        priorityQueue.push([costs[rightIndex--], SECTION.RIGHT]);
      }
    }
  }

  return result;
}
