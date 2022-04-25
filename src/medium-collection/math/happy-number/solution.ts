export function isHappy(n: number): boolean {
  const set = new Set();
  while (n !== 1) {
    if (set.has(n)) {
      return false;
    }
    set.add(n);
    n = sumDigits(n);
  }
  return true;
}

function sumDigits(n: number): number {
  let result = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    result += Math.pow(lastDigit, 2);
    n = Math.trunc(n / 10);
  }
  return result;
}
