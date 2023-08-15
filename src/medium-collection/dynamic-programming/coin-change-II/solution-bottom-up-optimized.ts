export function change(amount: number, coins: number[]): number {
  const memo = new Array(amount + 1).fill(0);
  //  we can always make up the amount 0 by not selecting any coins.
  memo[0] = 1;
  for (let i = coins.length - 1; i >= 0; i--) {
    for (let j = coins[i]; j <= amount; j++) {
      memo[j] += memo[j - coins[i]];
    }
  }
  return memo[amount];
}
