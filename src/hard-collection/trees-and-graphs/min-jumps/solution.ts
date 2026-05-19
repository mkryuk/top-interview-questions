export function minJumps(arr: number[]): number {
  const n = arr.length;
  if (n === 1) {
    return 0;
  }
  const valueToIndices = buildValueToIndices(arr);
  const visited = new Array<boolean>(n).fill(false);
  const queue: number[] = [];
  visited[0] = true;
  queue.push(0);
  let head = 0;
  let steps = 0;

  while (head < queue.length) {
    const levelSize = queue.length - head;
    for (let i = 0; i < levelSize; i++) {
      const currentIndex = queue[head];
      head++;
      if (currentIndex === n - 1) {
        return steps;
      }
      addNextIndex(currentIndex + 1, arr, visited, queue);
      addNextIndex(currentIndex - 1, arr, visited, queue);
      const sameValueIndices = valueToIndices.get(arr[currentIndex]);
      if (sameValueIndices !== undefined) {
        for (const nextIndex of sameValueIndices) {
          addNextIndex(nextIndex, arr, visited, queue);
        }
        // once we processed all same-value jumps for this value,
        // we never need to process them again
        valueToIndices.delete(arr[currentIndex]);
      }
    }
    steps++;
  }

  return -1;
}

function buildValueToIndices(arr: number[]): Map<number, number[]> {
  const valueToIndices = new Map<number, number[]>();
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (!valueToIndices.has(value)) {
      valueToIndices.set(value, []);
    }
    valueToIndices.get(value)!.push(i);
  }
  return valueToIndices;
}

function addNextIndex(index: number, arr: number[], visited: boolean[], queue: number[]): void {
  if (index < 0 || index >= arr.length) {
    return;
  }

  if (visited[index]) {
    return;
  }
  visited[index] = true;
  queue.push(index);
}
