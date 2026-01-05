export function sumFourDivisors(nums: number[]): number {
  let result = 0;

  for (const n of nums) {
    if (n < 6) {
      // 1..5 can't have exactly four divisors
      continue;
    }

    let sum = sumIfCubeOfPrime(n);
    if (sum !== 0) {
      result += sum;
      continue;
    }

    sum = sumIfProductOfTwoDistinctPrimes(n);
    if (sum !== 0) {
      result += sum;
    }
  }

  return result;
}

function isPrime(x: number): boolean {
  if (x < 2) {
    return false;
  }

  if (x % 2 === 0) {
    return x === 2;
  }

  for (let i = 3; i * i <= x; i += 2) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

function sumIfCubeOfPrime(n: number): number {
  const p = Math.round(Math.cbrt(n));
  if (p < 2) {
    return 0;
  }

  if (p * p * p !== n) {
    return 0;
  }

  if (!isPrime(p)) {
    return 0;
  }

  return 1 + p + p * p + n;
}

function sumIfProductOfTwoDistinctPrimes(n: number): number {
  for (let d = 2; d * d <= n; d++) {
    if (n % d !== 0) {
      continue;
    }

    const a = d;
    const b = Math.floor(n / d);

    if (a === b) {
      // perfect square can't have exactly 4 divisors
      return 0;
    }

    if (isPrime(a) && isPrime(b)) {
      return 1 + a + b + n;
    }

    // found a factor pair that isn't prime*prime -> can't have exactly 4 divisors
    return 0;
  }

  return 0;
}
