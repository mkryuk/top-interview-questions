export function maxScoreSightseeingPair(values: number[]): number {
  let maxLeftScore = values[0];
  let result = -Infinity;
  for (let i = 1; i < values.length; i++) {
    let currentScore = maxLeftScore + values[i] - i;
    result = Math.max(result, currentScore);
    maxLeftScore = Math.max(maxLeftScore, values[i] + i);
  }
  return result;
}
