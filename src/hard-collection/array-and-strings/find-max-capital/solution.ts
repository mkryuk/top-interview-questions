import { Heap } from "../../design/heap/heap";

export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[],
): number {
  const projects = profits.map((profit, index) => ({
    profit,
    capital: capital[index],
  }));

  projects.sort((a, b) => a.capital - b.capital);

  const maxHeap = new Heap<{ profit: number; capital: number }>(
    (a, b) => b.profit - a.profit,
  );

  let currentCapital = w;
  let projectIndex = 0;

  for (let i = 0; i < k; i++) {
    while (
      projectIndex < projects.length &&
      projects[projectIndex].capital <= currentCapital
    ) {
      maxHeap.insert(projects[projectIndex]);
      projectIndex++;
    }

    if (maxHeap.size() === 0) {
      break;
    }

    const project = maxHeap.pop();
    if (project) {
      currentCapital += project.profit;
    }
  }

  return currentCapital;
}
