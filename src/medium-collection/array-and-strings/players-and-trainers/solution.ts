export function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let result = 0;
  let i = 0;
  let j = 0;
  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) {
      result++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return result;
}
