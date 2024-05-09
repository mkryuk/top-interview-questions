export function maximumHappinessSum(happiness: number[], k: number): number {
  happiness.sort((a, b) => b - a);
  let result = 0;
  let childCount = 0;
  while (childCount < k) {
    result += Math.max(happiness[childCount] - childCount, 0);
    childCount++;
  }
  return result;
}
