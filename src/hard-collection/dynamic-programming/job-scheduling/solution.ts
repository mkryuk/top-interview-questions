export function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
  const n = startTime.length;
  let jobs: { start: number; end: number; profit: number }[] = [];
  for (let i = 0; i < n; i++) {
    jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
  }
  jobs.sort((a, b) => a.end - b.end);
  let dp = new Array(n + 1);
  dp[0] = jobs[0].profit;
  for (let i = 1; i < n; i++) {
    let prevIndex = prevNonConflictingJobIndex(jobs, i);
    let currentProfit = jobs[i].profit;
    if (prevIndex !== -1) {
      currentProfit += dp[prevIndex];
    }
    dp[i] = Math.max(dp[i - 1], currentProfit);
  }
  return dp[n - 1];
}

function prevNonConflictingJobIndex(jobs: { start: number; end: number; profit: number }[], index: number): number {
  let firstIndex = 0;
  let lastIndex = index - 1;
  while (firstIndex <= lastIndex) {
    let mid = firstIndex + Math.floor((lastIndex - firstIndex) / 2);
    if (jobs[mid].end <= jobs[index].start) {
      if (jobs[mid + 1].end <= jobs[index].start) {
        firstIndex = mid + 1;
      } else {
        return mid;
      }
    } else {
      lastIndex = mid - 1;
    }
  }
  return -1;
}
