export function duplicateZeros(arr: number[]): void {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
    }
  }
  arr.splice(n);
}
