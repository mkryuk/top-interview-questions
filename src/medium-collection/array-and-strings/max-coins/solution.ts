export function maxCoins(piles: number[]): number {
  piles.sort((a, b) => a - b);
  // we should skip a third of the piles for Bob
  let start = Math.trunc(piles.length / 3);
  let result = 0;
  for (let i = start; i < piles.length; i += 2) {
    // we will take every second big pile
    result += piles[i];
  }

  return result;
}
