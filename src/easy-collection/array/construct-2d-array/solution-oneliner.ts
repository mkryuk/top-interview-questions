export function construct2DArray(
  original: number[],
  m: number,
  n: number,
): number[][] {
  return original.length === m * n
    ? Array.from({ length: m }, (_, i) => original.slice(i * n, (i + 1) * n))
    : [];
}
