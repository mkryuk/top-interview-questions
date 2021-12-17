export function countPrimes(n: number): number {
  if (n < 2) {
    return 0;
  }
  let isPrime = new Array(n).fill(1, 2);
  for (let i = 2; i * i <= n; i++) {
    if (!isPrime[i]) {
      continue;
    }
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = 0;
    }
  }
  return isPrime.filter((n) => n === 1).length;
}
