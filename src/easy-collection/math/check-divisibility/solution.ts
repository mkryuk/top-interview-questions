export function checkDivisibility(n: number): boolean {
  let sum = 0;
  let product = 1;
  let num = n;
  while (num > 0) {
    const digit = num % 10;
    sum += digit;
    product *= digit;
    num = Math.trunc(num / 10);
  }
  return n % (sum + product) === 0;
}
