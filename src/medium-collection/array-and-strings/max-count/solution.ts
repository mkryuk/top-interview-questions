export function maxCount(banned: number[], n: number, maxSum: number): number {
  const bannedSet = new Set(banned);
  let currentSum = 0;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (currentSum + i > maxSum) {
      break;
    }
    if (bannedSet.has(i)) {
      continue;
    }
    currentSum += i;
    result++;
  }
  return result;
}
