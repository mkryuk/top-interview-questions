export function findCenter(edges: number[][]): number {
  let numCount = new Map<number, number>();

  for (const [a, b] of edges) {
    if (!numCount.has(a)) {
      numCount.set(a, 0);
    }
    if (!numCount.has(b)) {
      numCount.set(b, 0);
    }
    numCount.set(a, numCount.get(a)! + 1);
    numCount.set(b, numCount.get(b)! + 1);
  }

  let maxCount = 0;
  let maxNum = 0;
  for (const [num, count] of numCount) {
    if (maxCount < count) {
      maxCount = count;
      maxNum = num;
    }
  }

  return maxNum;
}
