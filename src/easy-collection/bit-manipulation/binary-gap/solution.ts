export function binaryGap(n: number): number {
  let result: number = 0;
  let lastOnePos: number = -1;
  let index: number = 0;
  while (n > 0) {
    if ((n & 1) === 1) {
      if (lastOnePos !== -1) {
        result = Math.max(result, index - lastOnePos);
      }
      lastOnePos = index;
    }
    n = n >> 1;
    index++;
  }

  return result;
}
