export function findSpecialInteger(arr: number[]): number {
  let num = Math.trunc(arr.length / 4);
  let count = 1;
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === result) {
      count++;
    } else {
      result = arr[i];
      count = 1;
    }
    if (count > num) {
      break;
    }
  }
  return result;
}
