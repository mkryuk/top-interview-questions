export function maximumProfit(prices: number[], k: number): number {
  const n = prices.length;
  if (k === 0 || n < 2) {
    return 0;
  }

  const negInf = Number.NEGATIVE_INFINITY;

  let cashPrev = Array.from({ length: k + 1 }, () => negInf);
  let longPrev = Array.from({ length: k + 1 }, () => negInf);
  let shortPrev = Array.from({ length: k + 1 }, () => negInf);

  let cashCur = Array.from({ length: k + 1 }, () => negInf);
  let longCur = Array.from({ length: k + 1 }, () => negInf);
  let shortCur = Array.from({ length: k + 1 }, () => negInf);

  cashPrev[0] = 0;

  for (let day = 0; day < n; day++) {
    const p = prices[day];

    for (let t = 0; t <= k; t++) {
      cashCur[t] = cashPrev[t];
      longCur[t] = Math.max(longPrev[t], cashPrev[t] - p);
      shortCur[t] = Math.max(shortPrev[t], cashPrev[t] + p);
    }

    for (let t = 1; t <= k; t++) {
      cashCur[t] = Math.max(cashCur[t], longPrev[t - 1] + p);
      cashCur[t] = Math.max(cashCur[t], shortPrev[t - 1] - p);
    }

    [cashPrev, cashCur] = [cashCur, cashPrev];
    [longPrev, longCur] = [longCur, longPrev];
    [shortPrev, shortCur] = [shortCur, shortPrev];
  }

  let result = 0;
  for (let t = 0; t <= k; t++) {
    result = Math.max(result, cashPrev[t]);
  }
  return result;
}
