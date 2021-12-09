export function climbStairs(n: number): number {
  let dynamic: number[] = [];
  dynamic[1] = 1;
  dynamic[2] = 2;
  for (let i = 3; i <= n; i++) {
    dynamic[i] = dynamic[i - 1] + dynamic[i - 2];
  }
  return dynamic[n];
}
