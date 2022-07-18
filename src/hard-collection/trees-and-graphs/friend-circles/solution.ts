export function findCircleNum(isConnected: number[][]): number {
  const completed = new Set<number>();
  let result = 0;
  for (let i = 0; i < isConnected.length; i++) {
    if (completed.has(i)) {
      continue;
    }
    const stack = [i];
    while (stack.length) {
      const n = stack.pop()!;
      for (let k = 0; k < isConnected.length; k++) {
        if (k === n || completed.has(k)) {
          continue;
        }
        if (isConnected[n][k]) {
          stack.unshift(k);
        }
      }
      completed.add(n);
    }
    result++;
  }
  return result;
}
