export function stoneGameIII(stoneValue: number[]): string {
  const n = stoneValue.length;
  const dp: number[] = new Array(n + 3).fill(0);

  for (let index = n - 1; index >= 0; index--) {
    let takenScore = 0;
    let bestDifference = Number.NEGATIVE_INFINITY;

    for (let count = 1; count <= 3; count++) {
      const stoneIndex = index + count - 1;

      if (stoneIndex >= n) {
        break;
      }

      takenScore += stoneValue[stoneIndex];

      const nextIndex = index + count;
      const scoreDifference = takenScore - dp[nextIndex];

      bestDifference = Math.max(bestDifference, scoreDifference);
    }

    dp[index] = bestDifference;
  }

  return getWinner(dp[0]);
}

function getWinner(scoreDifference: number): string {
  if (scoreDifference > 0) {
    return "Alice";
  }

  if (scoreDifference < 0) {
    return "Bob";
  }

  return "Tie";
}
