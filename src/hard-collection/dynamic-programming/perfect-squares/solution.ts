export function numSquares(n: number): number {
  const sqrtIdx = Math.trunc(Math.sqrt(n)) + 1;
  const sqrtNums: number[] = new Array(sqrtIdx);
  // pre calculate square numbers
  for (let i = 0; i < sqrtIdx; i++) {
    sqrtNums[i] = i * i;
  }
  const result = new Array(n + 1).fill(Infinity);
  result[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let k = 1; k < sqrtIdx; k++) {
      if (i < sqrtNums[k]) {
        break;
      }
      result[i] = Math.min(result[i], result[i - sqrtNums[k]] + 1);
    }
  }
  return result[n];
}
