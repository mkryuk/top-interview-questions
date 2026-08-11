export function winnerSquareGame(n: number): boolean {
  const dp: boolean[] = new Array(n + 1).fill(false);

  for (let stones = 1; stones <= n; stones++) {
    for (let number = 1; number * number <= stones; number++) {
      const square = number * number;
      const remaining = stones - square;
      if (!dp[remaining]) {
        dp[stones] = true;
        break;
      }
    }
  }
  return dp[n];
}
