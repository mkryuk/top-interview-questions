export function trailingZeroes(n: number): number {
  const fact = factorial(BigInt(n));
  const factStr = fact.toString();
  let result = factStr.search(/0+$/);
  return result === -1 ? 0 : factStr.length - result;
}

function factorial(n: bigint): bigint {
  let result: bigint = BigInt(1);
  while (n > 0) {
    result = result * n--;
  }
  return result;
}
