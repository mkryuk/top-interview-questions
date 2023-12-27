export function minCost(colors: string, neededTime: number[]): number {
  let totalTime = 0;
  let maxTimeInGroup = 0;

  for (let i = 0; i < colors.length; i++) {
    // If it's the first balloon or different from the previous one, reset maxTimeInGroup
    if (i == 0 || colors[i] !== colors[i - 1]) {
      maxTimeInGroup = neededTime[i];
    } else {
      // When consecutive balloons are of the same color
      totalTime += Math.min(maxTimeInGroup, neededTime[i]);
      maxTimeInGroup = Math.max(maxTimeInGroup, neededTime[i]);
    }
  }

  return totalTime;
}
