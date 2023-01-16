import { Heap } from "../../../hard-collection/design/heap/heap";

export function getOrder(tasks: number[][]): number[] {
  type ProcessType = { enqueue: number; processing: number; taskId: number };
  let processes: ProcessType[] = tasks
    .map(([enqueue, processing], taskId) => ({
      enqueue,
      processing,
      taskId,
    }))
    .sort((left, right) => {
      if (left.enqueue !== right.enqueue) {
        return left.enqueue - right.enqueue;
      } else if (left.processing !== right.processing) {
        return left.processing - right.processing;
      } else {
        return left.taskId - right.taskId;
      }
    });
  let heap = new Heap<ProcessType>((left, right) => {
    if (left.processing !== right.processing) {
      return left.processing - right.processing;
    } else {
      return left.taskId - right.taskId;
    }
  });
  let process = processes.shift()!;
  let time = process.enqueue;
  heap.push(process);
  let result: number[] = [];
  while (processes.length || !heap.isEmpty()) {
    while (processes.length && processes[0].enqueue <= time) {
      heap.push(processes.shift()!);
    }
    if (heap.isEmpty()) {
      process = processes.shift()!;
      time = process.enqueue;
    } else {
      process = heap.pop()!;
    }
    result.push(process.taskId);
    time += process.processing;
  }

  return result;
}
