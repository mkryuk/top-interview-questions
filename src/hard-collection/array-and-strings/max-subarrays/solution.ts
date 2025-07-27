export function maxSubarrays(n: number, conflictingPairs: number[][]): number {
  const INF = n + 1;

  // for each a = min(x, y), store two smallest b = max(x, y)
  const minB = Array(n + 1).fill(INF); // smallest b for each a
  const secondMinB = Array(n + 1).fill(INF); // second smallest b for each a

  for (const [x, y] of conflictingPairs) {
    const a = Math.min(x, y);
    const b = Math.max(x, y);
    if (b < minB[a]) {
      secondMinB[a] = minB[a];
      minB[a] = b;
    } else if (b < secondMinB[a]) {
      secondMinB[a] = b;
    }
  }

  // backward sweep to compute total valid subarrays and gain per removable pair
  let totalValidSubarrays = 0;
  const removalGain = Array(n + 1).fill(0);

  let bestA = n; // index a with current minimal minB[a]
  let secondBestGlobalB = INF;

  for (let i = n; i >= 1; i--) {
    // update bestA and global second-best b
    if (minB[i] < minB[bestA]) {
      secondBestGlobalB = Math.min(secondBestGlobalB, minB[bestA]);
      bestA = i;
    } else {
      secondBestGlobalB = Math.min(secondBestGlobalB, minB[i]);
    }

    const firstMin = Math.min(minB[bestA], INF);
    const secondMin = Math.min(Math.min(secondBestGlobalB, secondMinB[bestA]), INF);

    // count valid subarrays starting at i
    totalValidSubarrays += firstMin - i;

    // potential gain if we remove the pair that defines minB[bestA]
    removalGain[bestA] += secondMin - firstMin;
  }

  // add max gain from removing one conflicting pair
  return totalValidSubarrays + Math.max(...removalGain);
}
