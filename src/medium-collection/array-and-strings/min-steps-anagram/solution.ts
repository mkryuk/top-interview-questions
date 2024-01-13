export function minSteps(s: string, t: string): number {
  let sMap = new Map<string, number>();
  let tMap = new Map<string, number>();
  let n = s.length;
  for (let i = 0; i < n; i++) {
    if (!sMap.has(s[i])) {
      sMap.set(s[i], 0);
    }
    sMap.set(s[i], sMap.get(s[i])! + 1);

    if (!tMap.has(t[i])) {
      tMap.set(t[i], 0);
    }
    tMap.set(t[i], tMap.get(t[i])! + 1);
  }

  let result = 0;
  for (const [letter, num] of sMap) {
    result += Math.max(0, num - (tMap.get(letter) ?? 0));
  }
  return result;
}
