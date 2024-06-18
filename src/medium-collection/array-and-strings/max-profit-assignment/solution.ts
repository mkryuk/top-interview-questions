export function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[],
): number {
  let difficultyProfit = difficulty
    .map((diff, index) => [diff, profit[index]])
    .sort((a, b) => b[1] - a[1]);
  worker.sort((a, b) => b - a);
  let wIndex = 0;
  let dpIndex = 0;
  let result = 0;
  while (wIndex < worker.length && dpIndex < difficultyProfit.length) {
    const [diff, profit] = difficultyProfit[dpIndex];
    if (worker[wIndex] >= diff) {
      result += profit;
      wIndex++;
    } else {
      dpIndex++;
    }
  }
  return result;
}
