export function maxChunksToSorted(arr: number[]): number {
  const n = arr.length;
  let result = 0;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, arr[i]);
    if (max === i) {
      result++;
    }
  }
  return result;
}
