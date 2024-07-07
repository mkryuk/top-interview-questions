export function circularGameLosers(n: number, k: number): number[] {
  const players = new Array(n).fill(0);
  let index = 0;
  let turn = 0;
  while (players[index] !== 1) {
    players[index] = 1;
    turn++;
    const steps = turn * k;
    index = (index + steps) % n;
  }

  const result = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i] === 0) {
      result.push(i + 1);
    }
  }
  return result;
}
