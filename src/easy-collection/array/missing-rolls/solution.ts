export function missingRolls(rolls: number[], mean: number, n: number): number[] {
  const m = rolls.length;
  const totalSum = mean * (n + m);
  const rollsSum = rolls.reduce((prev, curr) => prev + curr, 0);
  let remainingPoints = totalSum - rollsSum;

  if (remainingPoints < n || remainingPoints > 6 * n) {
    return [];
  }

  let result = Array(n).fill(1);
  remainingPoints -= n;
  for (let i = 0; i < n && remainingPoints > 0; i++) {
    const current = Math.min(5, remainingPoints);
    result[i] += current;
    remainingPoints -= current;
  }
  return result;
}
