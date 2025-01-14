export function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const n = A.length;
  const aIndexMap = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    aIndexMap.set(A[i], i);
  }
  const bIndexMap = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    bIndexMap.set(B[i], i);
  }
  let result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const index = Math.max(aIndexMap.get(A[i])!, bIndexMap.get(A[i])!);
    result[index] += 1;
  }
  let commonCount = 0;
  for (let i = 0; i < n; i++) {
    commonCount += result[i];
    result[i] = commonCount;
  }
  return result;
}
