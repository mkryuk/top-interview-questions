export function divide(dividend: number, divisor: number): number {
  const MAX_INT = 2147483647; // 2^31 - 1
  const MIN_INT = -2147483648; // -2^31
  const HALF_MIN_INT = -1073741824; // MIN_INT / 2
  // Special case: overflow.
  if (dividend == MIN_INT && divisor == -1) {
    return MAX_INT;
  }

  /* We need to convert both numbers to negatives.
   * Also, we count the number of negatives signs. */
  let negatives = 2;
  if (dividend > 0) {
    negatives--;
    dividend = -dividend;
  }
  if (divisor > 0) {
    negatives--;
    divisor = -divisor;
  }

  let doubles: number[] = [];
  let powersOfTwo: number[] = [];

  /* Nothing too exciting here, we're just making a list of doubles of 1 and
   * the divisor. This is pretty much the same as Approach 2, except we're
   * actually storing the values this time. */
  let powerOfTwo = -1;
  while (divisor >= dividend) {
    doubles.push(divisor);
    powersOfTwo.push(powerOfTwo);
    // Prevent needless overflows from occurring...
    if (divisor < HALF_MIN_INT) {
      break;
    }
    divisor += divisor;
    powerOfTwo += powerOfTwo;
  }

  let quotient = 0;
  /* Go from largest double to smallest, checking if the current double fits.
   * into the remainder of the dividend. */
  for (let i = doubles.length - 1; i >= 0; i--) {
    if (doubles[i] >= dividend) {
      // If it does fit, add the current powerOfTwo to the quotient.
      quotient += powersOfTwo[i];
      // Update dividend to take into account the bit we've now removed.
      dividend -= doubles[i];
    }
  }

  /* If there was originally one negative sign, then
   * the quotient remains negative. Otherwise, switch
   * it to positive. */
  if (negatives != 1) {
    return -quotient;
  }
  return quotient;
}
