export function trailingZeroes(n: number): number {
  let zeroCount = 0;
  while (n > 0) {
    n = Math.trunc(n / 5);
    zeroCount += n;
  }
  return zeroCount;
}

// export function trailingZeroes(n: number): number {
//   let zeroCount = 0;
//   let currentMultiple = 5;
//   while (n >= currentMultiple) {
//     zeroCount += Math.trunc(n / currentMultiple);
//     currentMultiple *= 5;
//   }
//   return zeroCount;
// }
