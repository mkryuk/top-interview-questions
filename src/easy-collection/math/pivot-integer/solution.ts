export function pivotInteger(n: number): number {
  const totalSum = ((n + 1) * n) / 2;
  let prefixSum = 0;
  for (let i = 1; i <= n; i++) {
    prefixSum += i;
    // Check if the sum from 1 to i equals the sum from i to n
    if (prefixSum === totalSum + i - prefixSum) {
      return i;
    }
  }
  return -1;
}
