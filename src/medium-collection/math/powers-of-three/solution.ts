export function checkPowersOfThree(n: number): boolean {
  // the max number is 3^16
  let maxPow = 16;
  while (maxPow >= 0) {
    const pow = Math.pow(3, maxPow);
    if (pow <= n) {
      n = n - pow;
    }
    maxPow--;
  }

  return n === 0;
}
