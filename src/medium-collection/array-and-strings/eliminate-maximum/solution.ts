export function eliminateMaximum(dist: number[], speed: number[]): number {
  let timeLeft = [];
  let n = dist.length;
  for (let i = 0; i < n; i++) {
    timeLeft[i] = Math.ceil(dist[i] / speed[i]);
  }

  let monstersPerMinute = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (timeLeft[i] >= n) {
      continue;
    }
    monstersPerMinute[timeLeft[i]]++;
  }

  let shots = 0;
  for (let i = 0; i < n; i++) {
    if (monstersPerMinute[i] === 0) {
      // we shoot the next monster or we can think of it
      // as saving that shot for the next monster
      shots++;
      continue;
    }
    // if less monsters have arrived this minute than we have saved shots
    if (monstersPerMinute[i] <= shots) {
      shots = shots - monstersPerMinute[i] + 1;
    } else {
      return i;
    }
  }

  return n;
}
