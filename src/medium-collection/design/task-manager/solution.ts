export class TaskManager {
  constructor(tasks: number[][]) {}

  add(userId: number, taskId: number, priority: number): void {}

  edit(taskId: number, newPriority: number): void {}

  rmv(taskId: number): void {}

  execTop(): number {
    return 0;
  }
}
