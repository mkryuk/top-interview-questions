export function duplicateZeros(arr: number[]): void {
  let n = arr.length - 1;
  let zeroes = 0;
  for (let i = 0; i <= n - zeroes; i++) {
    if (arr[i] === 0) {
      // edge case when the last zero cannot be duplicated
      if (i === n - zeroes) {
        arr[n] = 0;
        n--;
        break;
      }
      zeroes++;
    }
  }

  // we copy array from the end duplicating zeroes
  // starting from the last - zeroes count
  for (let i = n - zeroes; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i + zeroes] = 0;
      zeroes--;
      arr[i + zeroes] = 0;
    } else {
      arr[i + zeroes] = arr[i];
    }
  }
}
