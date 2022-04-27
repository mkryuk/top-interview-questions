// Instead of computing the factorial we can recognize
// that each 0 at the end of the factorial 
// represents a multiplication by 10 that is 2 * 5
// 42 * 75 = 3150 (one zero)
// 42 = 2 * 3 * 7
// 75 = 3 * 5 * 5
// 42 * 75 = 2 * 3 * 7 * 3 * 5 * 5 (one pair of 2 and 5)
// Now, in order to determine how many zeroes are at the end, 
// we should look at how many complete pairs of 2 and 5 are among the factors.
// Then we can notice that number of twos is always bigger than fives
// So we can simply ignore the number of twos
// which leaves us with calculation of number of fives

// fives = n/5 + n/5/5 + n/5/5/5 + n/5/5/5/5 ...
export function trailingZeroes(n: number): number {
  let zeroCount = 0;
  while (n > 0) {
    n = Math.trunc(n / 5);
    zeroCount += n;
  }
  return zeroCount;
}

// fives = n/5 + n/(5*5) + n/(5*5*5) + n/(5*5*5*5) ...
// export function trailingZeroes(n: number): number {
//   let zeroCount = 0;
//   let currentMultiple = 5;
//   while (n >= currentMultiple) {
//     zeroCount += Math.trunc(n / currentMultiple);
//     currentMultiple *= 5;
//   }
//   return zeroCount;
// }
