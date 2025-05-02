export function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {
  // sort tasks in ascending order (easiest to hardest)
  tasks.sort((a, b) => a - b);

  // sort workers in ascending order (weakest to strongest)
  workers.sort((a, b) => a - b);

  // binary search to find the maximum number of tasks that can be completed
  let left = 0;
  let right = Math.min(tasks.length, workers.length);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canAssign(tasks.slice(0, mid), workers, pills, strength)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

function canAssign(tasks: number[], workers: number[], pills: number, strength: number): boolean {
  const n = tasks.length;
  const w = workers.slice(); // keep original untouched
  let workerIdx = w.length - 1;

  const deque: number[] = [];
  let head = 0;

  // process tasks from hardest to easiest
  for (let ti = n - 1; ti >= 0; --ti) {
    const need = tasks[ti];

    // push all workers that could handle this task with a pill
    while (workerIdx >= 0 && w[workerIdx] + strength >= need) {
      deque.push(workerIdx--);
    }

    // if deque is empty - no one (even with pill) can do it
    if (head === deque.length) {
      return false;
    }

    const wi = deque[head]; // weakest eligible worker
    if (w[wi] >= need) {
      // can do it without pill
      head++;
    } else {
      // must use a pill → consume from back
      if (pills === 0) {
        return false;
      }
      deque.pop();
      pills--;
    }
  }

  return true;
}
