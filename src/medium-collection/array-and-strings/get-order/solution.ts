import { Heap } from "../../../hard-collection/design/heap/heap";

export function getOrder(tasks: number[][]): number[] {
  type ProcessType = { enqueue: number; processing: number; taskId: number };
  let processes: ProcessType[] = tasks
    .map(([enqueue, processing], taskId) => ({
      enqueue,
      processing,
      taskId,
    }))
    .sort((left, right) => left.enqueue - right.enqueue);

  let heap = new Heap<ProcessType>((left, right) =>
    left.processing !== right.processing
      ? left.processing - right.processing
      : left.taskId - right.taskId,
  );

  let currentTime = 0;
  let taskIndex = 0;
  const result: number[] = [];
  while (taskIndex < processes.length || !heap.isEmpty()) {
    if (heap.isEmpty() && currentTime < processes[taskIndex].enqueue) {
      // When the heap is empty, try updating currTime to next task's enqueue time.
      currentTime = processes[taskIndex].enqueue;
    }
    // Take available processes and put them into the heap
    while (
      taskIndex < processes.length &&
      processes[taskIndex].enqueue <= currentTime
    ) {
      heap.push(processes[taskIndex++]);
    }

    const process = heap.pop()!;
    result.push(process.taskId);
    currentTime += process.processing;
  }

  return result;
}
