export function maximumCandies(candies: number[], k: number): number {
  let sum = candies.reduce((p, c) => p + c, 0);
  let max = Math.trunc(sum / k);
  let min = 0;
  let result = 0;
  if (sum < k) {
    return 0;
  }
  while (min <= max) {
    const mid = min + Math.trunc((max - min) / 2);
    if (checkCandies(mid, candies, k)) {
      result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return result;
}

function checkCandies(quantity: number, candies: number[], k: number): boolean {
  let result = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] < quantity) {
      continue;
    }
    result += Math.trunc(candies[i] / quantity);
  }
  return result >= k;
}
