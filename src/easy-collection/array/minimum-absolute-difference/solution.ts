export function minimumAbsDifference(arr: number[]): number[][] {
  let result: number[][] = [];
  let minDiff = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
      result = [[arr[i - 1], arr[i]]];
    } else if (diff === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
  return result;
}
