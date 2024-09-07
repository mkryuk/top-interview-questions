export function minCost(colors: string, neededTime: number[]): number {
  let windowSum = 0;
  let maxWindowValue = 0;
  let totalTime = 0;
  for (let i = 1; i < colors.length; i++) {
    // When consecutive balloons are of the same color
    if (colors[i] === colors[i - 1]) {
      windowSum = windowSum === 0 ? neededTime[i - 1] : windowSum;
      maxWindowValue = maxWindowValue === 0 ? neededTime[i - 1] : maxWindowValue;
      windowSum += neededTime[i];
      maxWindowValue = Math.max(maxWindowValue, neededTime[i]);
    }
    // If it's the last balloon or different from the previous one
    if (colors[i] !== colors[i - 1] || i === colors.length - 1) {
      totalTime += windowSum - maxWindowValue;
      windowSum = 0;
      maxWindowValue = 0;
    }
  }
  return totalTime;
}
