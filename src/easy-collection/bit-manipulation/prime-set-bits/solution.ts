export function countPrimeSetBits(left: number, right: number): number {
  const primes = new Set<number>([2, 3, 5, 7, 11, 13, 17, 19]);
  let result = 0;
  for (let num = left; num <= right; num++) {
    const bits = countBits(num);
    if (primes.has(bits)) {
      result++;
    }
  }
  return result;
}

function countBits(num: number): number {
  let count = 0;
  while (num > 0) {
    num &= num - 1;
    count++;
  }
  return count;
}
