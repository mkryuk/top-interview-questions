export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let result = 0;
  for (let k = 2; k < arr.length; k++) {
    for (let j = 0; j < k; j++) {
      if (Math.abs(arr[j] - arr[k]) > b) {
        continue;
      }
      for (let i = 0; i < j; i++) {
        if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[i] - arr[k]) <= c) {
          result++;
        }
      }
    }
  }
  return result;
}
