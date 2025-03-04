export function checkPowersOfThree(n: number): boolean {
  while (n > 0) {
    // if remainder is 2, it means we cannot form it using distinct powers of three
    if (n % 3 === 2) {
      return false;
    }
    n = Math.floor(n / 3);
  }

  return true;
}
