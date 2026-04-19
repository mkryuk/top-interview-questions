export function mirrorDistance(n: number): number {
  const reversed = reverseNumber(n);
  return Math.abs(n - reversed);
}

function reverseNumber(n: number): number {
  let num = 0;
  while (n > 0) {
    num = num * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return num;
}
