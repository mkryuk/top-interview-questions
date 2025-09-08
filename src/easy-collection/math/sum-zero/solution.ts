export function sumZero(n: number): number[] {
  const result = new Array(n);
  // negative sum of arithmetic progression 1..(n-1)
  result[0] = -((n * (n - 1)) / 2);
  for (let i = 1; i < n; i++) {
    result[i] = i;
  }
  return result;
}
