export function climbStairs(n: number): number {
  if (n < 2) {
    return n;
  }
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const sum = first + second;
    first = second;
    second = sum;
  }
  return second;
}
