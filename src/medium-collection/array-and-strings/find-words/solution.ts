export function findWinners(matches: number[][]): number[][] {
  const winners = new Map<number, number>();
  const losers = new Map<number, number>();
  matches.forEach(([winner, loser]) => {
    if (winners.has(winner)) {
      winners.set(winner, winners.get(winner)! + 1);
    } else {
      winners.set(winner, 1);
    }
    if (losers.has(loser)) {
      losers.set(loser, losers.get(loser)! + 1);
    } else {
      losers.set(loser, 1);
    }
  });
  const winnersArr: number[] = [];
  const losersArr: number[] = [];
  winners.forEach((quant, winner) => {
    if (!losers.has(winner)) {
      winnersArr.push(winner);
    }
  });
  losers.forEach((quant, loser) => {
    if (quant === 1) {
      losersArr.push(loser);
    }
  });
  return [winnersArr.sort((a, b) => a - b), losersArr.sort((a, b) => a - b)];
}
