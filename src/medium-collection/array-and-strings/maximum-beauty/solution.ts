export function maximumBeauty(items: number[][], queries: number[]): number[] {
  items.sort((a, b) => a[0] - b[0]);
  const n = items.length;
  const prices = new Array(n);
  const maxBeauties = new Array(n);
  let maxBeauty = 0;
  for (let i = 0; i < n; i++) {
    prices[i] = items[i][0];
    maxBeauty = Math.max(maxBeauty, items[i][1]);
    maxBeauties[i] = maxBeauty;
  }

  const queryIndex = queries.map((value, index) => [value, index]);
  const result = new Array(queries.length);
  for (const [query, index] of queryIndex) {
    const idx = bisectRight(prices, query) - 1;
    if (idx >= 0) {
      result[index] = maxBeauties[idx];
    } else {
      result[index] = 0;
    }
  }
  return result;
}

function bisectRight(prices: number[], num: number): number {
  let left = 0;
  let right = prices.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (prices[mid] <= num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
