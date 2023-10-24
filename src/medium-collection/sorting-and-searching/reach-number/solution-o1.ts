export function reachNumber(target: number): number {
  // make target positive
  target = target > 0 ? target : target * -1;
  // find nearest count for the target
  // since target = ((n + 1) * n) / 2
  // n = -1 + sqrt(1 + 8 * target) / 2
  const n = Math.ceil((-1 + Math.sqrt(1 + 8 * target)) / 2);
  // find sum for this count
  const sum = ((n + 1) * n) / 2;
  // If the difference between 'sum' and 'target' is even, we can always flip one of the steps
  // If the difference is odd, we need to make additional moves to reach an even difference,
  // Adding 'n + 1' ensures that we take the next step in the sequence to get an even number.
  // (n % 2) adjusts for the fact that if 'n' itself is odd, we need to take two more steps (odd + odd = even).
  // If 'n' is even, we only need to take one more step (even + odd = odd, and we need the sum to be even).
  return (target - sum) % 2 === 0 ? n : n + 1 + (n % 2);
}
