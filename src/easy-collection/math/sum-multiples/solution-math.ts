export function sumOfMultiples(n: number): number {
  return (
    sumDivisibleBy(n, 3) + // Sum of multiples of 3
    sumDivisibleBy(n, 5) + // Sum of multiples of 5
    sumDivisibleBy(n, 7) - // Sum of multiples of 7
    sumDivisibleBy(n, 3 * 5) - // Subtract multiples of (3 and 5)
    sumDivisibleBy(n, 3 * 7) - // Subtract multiples of (3 and 7)
    sumDivisibleBy(n, 5 * 7) + // Subtract multiples of (5 and 7)
    sumDivisibleBy(n, 3 * 5 * 7) // Add back multiples of (3, 5, and 7)
  );
}

function sumDivisibleBy(n: number, x: number): number {
  // Determine how many numbers up to n are divisible by x.
  const count = Math.floor(n / x);

  // Use the arithmetic progression formula to get the sum
  // of the first 'count' natural numbers and multiply by x
  // to get the sum of numbers divisible by x.
  return (x * (count * (count + 1))) / 2;
}
