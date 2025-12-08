export function countOdds(low: number, high: number): number {
  const rest = low % 2 !== 0 && high % 2 !== 0 ? 1 : 0;
  return Math.ceil((high - low) / 2) + rest;
}
