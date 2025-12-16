export function getDescentPeriods(prices: number[]): number {
  let result = 0;
  let runLen = 1;
  for (let i = 0; i < prices.length; i++) {
    if (i > 0 && prices[i - 1] - prices[i] === 1) {
      runLen += 1;
    } else {
      runLen = 1;
    }
    result += runLen;
  }
  return result;
}
