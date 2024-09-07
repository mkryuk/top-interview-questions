export function tribonacci(n: number): number {
  const results = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    results[i % 3] = results[i % 3] + results[(i + 1) % 3] + results[(i + 2) % 3];
  }
  return results[n % 3];
}
