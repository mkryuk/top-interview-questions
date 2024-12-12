import { Heap } from "../../../hard-collection/design/heap/heap";

export function pickGifts(gifts: number[], k: number): number {
  const maxHeap = new Heap<number>((a, b) => b - a);
  for (const gift of gifts) {
    maxHeap.push(gift);
  }

  for (let i = 0; i < k; i++) {
    let pile = maxHeap.pop()!;
    pile = Math.floor(Math.sqrt(pile));
    maxHeap.push(pile);
  }

  const result = maxHeap.nodes.reduce((prev, curr) => prev + curr, 0);
  return result;
}
