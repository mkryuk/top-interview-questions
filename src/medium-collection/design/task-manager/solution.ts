import { Heap } from "../../../hard-collection/design/heap/heap";

class Node {
  constructor(public priority: number, public taskId: number, public version: number) {}
}

interface TaskState {
  userId: number;
  priority: number;
  version: number;
  active: boolean;
}

export class TaskManager {
  private tasks: Map<number, TaskState>;
  private heap: Heap<Node>;

  constructor(tasks: number[][]) {
    this.tasks = new Map();
    // bigger priority wins, tie-break on bigger taskId
    this.heap = new Heap<Node>((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority;
      } else {
        return b.taskId - a.taskId;
      }
    });

    for (const [userId, taskId, priority] of tasks) {
      this.add(userId, taskId, priority);
    }
  }

  public add(userId: number, taskId: number, priority: number): void {
    const state: TaskState = { userId, priority, version: 0, active: true };
    this.tasks.set(taskId, state);
    this.heap.push(new Node(priority, taskId, state.version));
  }

  public edit(taskId: number, newPriority: number): void {
    const state = this.tasks.get(taskId);
    if (state && state.active) {
      state.version += 1;
      state.priority = newPriority;
      this.heap.push(new Node(newPriority, taskId, state.version));
    }
  }

  public rmv(taskId: number): void {
    const state = this.tasks.get(taskId);
    if (state && state.active) {
      state.version += 1;
      state.active = false;
    }
  }

  public execTop(): number {
    while (!this.heap.isEmpty()) {
      const top = this.heap.top()!;
      const state = this.tasks.get(top.taskId);

      if (!state || !state.active || state.version !== top.version || state.priority !== top.priority) {
        this.heap.pop(); // discard stale
        continue;
      }

      // execute this task
      const userId = state.userId;
      state.version += 1;
      state.active = false;
      this.tasks.delete(top.taskId);
      this.heap.pop();
      return userId;
    }
    return -1;
  }
}
