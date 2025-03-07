export function closestPrimes(left: number, right: number): number[] {
  const primeNumbers = getPrimeNumbers(left, right);
  let result: [number, number] = [-1, -1];
  let minDiff = Infinity;
  for (let i = 0; i < primeNumbers.length - 1; i++) {
    const leftPrime = primeNumbers[i];
    const rightPrime = primeNumbers[i + 1];
    if (rightPrime - leftPrime < minDiff) {
      minDiff = rightPrime - leftPrime;
      result = [leftPrime, rightPrime];
    }
  }
  return result;
}

function getPrimeNumbers(left: number, right: number): number[] {
  let primeNumbers = new Array(right + 1).fill(true);
  primeNumbers[0] = primeNumbers[1] = false;
  for (let i = 2; i <= right; i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= right; j += i) {
        primeNumbers[j] = false;
      }
    }
  }
  let result: number[] = [];
  for (let i = Math.max(2, left); i <= right; i++) {
    if (primeNumbers[i]) {
      result.push(i);
    }
  }
  return result;
}
