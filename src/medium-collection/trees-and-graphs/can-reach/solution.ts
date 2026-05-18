export function canReach(arr: number[], start: number): boolean {
  const visited: boolean[] = new Array(arr.length).fill(false);
  const queue: number[] = [start];
  let head = 0;

  while (head < queue.length) {
    const index = queue[head];
    head++;
    if (arr[index] === 0) {
      return true;
    }
    if (visited[index]) {
      continue;
    }
    visited[index] = true;
    const jump = arr[index];
    const nextRight = index + jump;
    const nextLeft = index - jump;
    if (nextRight < arr.length && !visited[nextRight]) {
      queue.push(nextRight);
    }
    if (nextLeft >= 0 && !visited[nextLeft]) {
      queue.push(nextLeft);
    }
  }
  return false;
}
