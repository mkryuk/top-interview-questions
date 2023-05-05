export function predictPartyVictory(senate: string): string {
  let radiantCount = 0;
  let direCount = 0;
  const senateQueue: string[] = [];
  for (let i = 0; i < senate.length; i++) {
    senateQueue.push(senate[i]);
    if (senate[i] === "R") {
      radiantCount++;
    } else {
      direCount++;
    }
  }
  let radiantBanned = 0;
  let direBanned = 0;
  while (radiantCount > 0 && direCount > 0) {
    const s = senateQueue.shift()!;
    if (s === "R") {
      radiantBanned === 0
        ? (direBanned++, direCount--, senateQueue.push(s))
        : radiantBanned--;
    } else {
      direBanned === 0
        ? (radiantBanned++, radiantCount--, senateQueue.push(s))
        : direBanned--;
    }
  }
  return radiantCount > 0 ? "Radiant" : "Dire";
}
