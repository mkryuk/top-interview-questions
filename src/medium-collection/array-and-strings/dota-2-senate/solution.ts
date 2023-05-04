export function predictPartyVictory(senate: string): string {
  const radiantQueue: number[] = [];
  const direQueue: number[] = [];

  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }

  while (radiantQueue.length > 0 && direQueue.length > 0) {
    if (radiantQueue[0] < direQueue[0]) {
      radiantQueue.push(radiantQueue[0] + senate.length);
    } else {
      direQueue.push(direQueue[0] + senate.length);
    }

    radiantQueue.shift();
    direQueue.shift();
  }

  return radiantQueue.length > 0 ? "Radiant" : "Dire";
}
