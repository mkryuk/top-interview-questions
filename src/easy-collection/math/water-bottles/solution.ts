export function numWaterBottles(
  numBottles: number,
  numExchange: number,
): number {
  let result = numBottles;
  while (numBottles / numExchange >= 1) {
    const renewed = Math.trunc(numBottles / numExchange);
    result += renewed;
    numBottles = renewed + (numBottles % numExchange);
  }
  return result;
}
