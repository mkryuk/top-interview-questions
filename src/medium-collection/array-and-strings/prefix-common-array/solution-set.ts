export function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const n = A.length;
  let commonCount = 0;
  let seen = new Set<number>();
  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    if (seen.has(A[i])) {
      commonCount++;
    } else {
      seen.add(A[i]);
    }
    if (seen.has(B[i])) {
      commonCount++;
    } else {
      seen.add(B[i]);
    }
    result[i] = commonCount;
  }
  return result;
}
