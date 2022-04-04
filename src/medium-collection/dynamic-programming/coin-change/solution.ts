export function coinChange(coins: number[], amount: number): number {
  const coinTable = new Array(amount + 1).fill(Infinity);
  coinTable[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        coinTable[i] = Math.min(coinTable[i], coinTable[i - coins[j]] + 1);
      }
    }
  }
  return coinTable[amount] === Infinity ? -1 : coinTable[amount];
}
