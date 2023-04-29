export function findSpecialInteger(arr: number[]): number {
  let quarter = Math.trunc(arr.length / 4);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + quarter]) {
      return arr[i];
    }
  }
  return -1;
}
