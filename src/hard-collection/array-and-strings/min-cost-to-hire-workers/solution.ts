import { Heap } from "../../design/heap/heap";

export function mincostToHireWorkers(
  quality: number[],
  wage: number[],
  k: number,
): number {
  const heap = new Heap<number>((a, b) => b - a);
  const workers = quality.map((q, i) => ({
    quality: q,
    wage: wage[i],
    ratio: wage[i] / q,
  }));
  workers.sort((a, b) => a.ratio - b.ratio);

  let qualitySum = 0;
  let minCost = Infinity;
  for (const worker of workers) {
    heap.push(worker.quality);
    qualitySum += worker.quality;
    if (heap.size() > k) {
      qualitySum -= heap.pop()!;
    }
    if (heap.size() === k) {
      minCost = Math.min(minCost, qualitySum * worker.ratio);
    }
  }

  return minCost;
}
