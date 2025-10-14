export function minTime(skill: number[], mana: number[]): number {
  const n: number = skill.length;
  const m: number = mana.length;

  const prefixS: number[] = new Array(n + 1);
  prefixS[0] = 0;
  for (let i = 0; i < n; i += 1) {
    prefixS[i + 1] = prefixS[i] + skill[i];
  }

  const totalS: number = prefixS[n];

  // compute consecutive start-time gaps d[j]
  // d[j] = max_i ( mana[j] * prefixS[i+1] - mana[j+1] * prefixS[i] )
  const gaps: number[] = new Array(Math.max(0, m - 1));
  for (let j = 0; j + 1 < m; j += 1) {
    let need: number = Number.NEGATIVE_INFINITY;
    const mj: number = mana[j];
    const mj1: number = mana[j + 1];

    for (let i = 0; i < n; i += 1) {
      const candidate: number = mj * prefixS[i + 1] - mj1 * prefixS[i];
      if (candidate > need) {
        need = candidate;
      }
    }
    // by machine 0 constraint, need is at least mj * skill[0] (strictly positive), so no extra max with 0 needed
    gaps[j] = need;
  }

  // accumulate start times at the first wizard: x[0] = 0; x[j+1] = x[j] + gaps[j]
  let xLast: number = 0;
  for (let j = 0; j + 1 < m; j += 1) {
    xLast += gaps[j];
  }

  // the final completion time is start of last potion plus its total processing across all wizards
  const answer: number = xLast + mana[m - 1] * totalS;
  return answer;
}
