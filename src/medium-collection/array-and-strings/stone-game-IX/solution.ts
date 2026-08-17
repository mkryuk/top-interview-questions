export function stoneGameIX(stones: number[]): boolean {
  const count = [0, 0, 0];

  for (const stone of stones) {
    count[stone % 3]++;
  }

  // stones divisible by 3 only affect whose turn it is
  if (count[0] % 2 === 0) {
    // alice needs both remainder groups to exist
    return count[1] > 0 && count[2] > 0;
  }

  // with an odd number of remainder-0 stones,
  // alice needs a sufficiently large imbalance
  return Math.abs(count[1] - count[2]) > 2;
}
