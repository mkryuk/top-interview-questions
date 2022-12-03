export function findWinners(matches: number[][]): number[][] {
  const loses = new Array(100001).fill(-1);
  matches.forEach(([winner, loser]) => {
    if (loses[winner] === -1) {
      loses[winner] = 0;
    }
    if (loses[loser] === -1) {
      loses[loser] = 1;
    } else {
      loses[loser]++;
    }
  });

  const winners: number[] = [];
  const losers: number[] = [];
  loses.forEach((loses, player) => {
    if (loses === 0) {
      winners.push(player);
    }
    if (loses === 1) {
      losers.push(player);
    }
  });
  return [winners, losers];
}
