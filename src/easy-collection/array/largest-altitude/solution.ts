export function largestAltitude(gain: number[]): number {
  let result = 0;
  let alt = 0;
  for (const diff of gain) {
    alt += diff;
    result = Math.max(result, alt);
  }
  return result;
}
