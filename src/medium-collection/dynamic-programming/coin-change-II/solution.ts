export function change(amount: number, coins: number[]): number {
  const memo = Array.from({ length: coins.length }, () =>
    new Array(amount + 1).fill(-1),
  );

  return coinsCombinationsNumber(0, coins, amount, memo);
}

function coinsCombinationsNumber(
  i: number,
  coins: number[],
  amount: number,
  memo: number[][],
): number {
  if (amount === 0) {
    return 1;
  } else if (i === coins.length) {
    return 0;
  } else if (memo[i][amount] !== -1) {
    return memo[i][amount];
  } else if (coins[i] > amount) {
    memo[i][amount] = coinsCombinationsNumber(i + 1, coins, amount, memo);
    return memo[i][amount];
  }
  memo[i][amount] =
    coinsCombinationsNumber(i, coins, amount - coins[i], memo) +
    coinsCombinationsNumber(i + 1, coins, amount, memo);
  return memo[i][amount];
}
