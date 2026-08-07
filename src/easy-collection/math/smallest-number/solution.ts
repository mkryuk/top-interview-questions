export function smallestNumber(n: number, t: number): number {
  for (let i = n; i <= 100; i++) {
    const product = getDigitsProduct(i);
    if (product % t === 0) {
      return i;
    }
  }
  return -1;
}

function getDigitsProduct(n: number): number {
  let product = 1;
  while (n > 0) {
    const digit = n % 10;
    product *= digit;
    n = Math.trunc(n / 10);
  }
  return product;
}
