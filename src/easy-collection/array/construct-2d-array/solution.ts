export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return [];
  }
  const result: number[][] = Array.from({ length: m }, () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i][j] = original[i * n + j];
    }
  }
  return result;
}
