export function countLargestGroup(n: number): number {
  let groupMap = new Map<number, number>();
  for (let i = 1; i <= n; i++) {
    const num = getDigitSum(i);
    groupMap.set(num, (groupMap.get(num) ?? 0) + 1);
  }
  const groupSize = Array.from(groupMap.values());
  let maxGroupSize = 0;
  for (let i = 0; i < groupSize.length; i++) {
    maxGroupSize = Math.max(maxGroupSize, groupSize[i]);
  }
  let result = 0;
  for (let i = 0; i < groupSize.length; i++) {
    if (groupSize[i] === maxGroupSize) {
      result++;
    }
  }
  return result;
}

function getDigitSum(n: number): number {
  let result = 0;
  while (n > 0) {
    result += n % 10;
    n = Math.trunc(n / 10);
  }
  return result;
}
