export function change(amount: number, coins: number[]): number {
  let memo = Array.from({ length: coins.length + 1 }, () =>
    new Array(amount + 1).fill(0),
  );
  //  we can always make up the amount 0 by not selecting any coins.
  for (let i = 0; i < coins.length; i++) {
    memo[i][0] = 1;
  }
  for (let i = coins.length - 1; i >= 0; i--) {
    for (let j = 1; j <= amount; j++) {
      if (coins[i] > j) {
        memo[i][j] = memo[i + 1][j];
      } else {
        memo[i][j] = memo[i][j - coins[i]] + memo[i + 1][j];
      }
    }
  }
  return memo[0][amount];
}
