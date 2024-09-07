export function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  arr.sort((a, b) => a - b);
  arr[0] = 1;
  let result = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
    result = Math.max(result, arr[i]);
  }
  return result;
}
