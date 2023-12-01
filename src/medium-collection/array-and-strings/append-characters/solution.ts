export function appendCharacters(s: string, t: string): number {
  let tIndex = 0;
  for (let sIndex = 0; sIndex < s.length; sIndex++) {
    if (s[sIndex] !== t[tIndex]) {
      continue;
    }
    tIndex++;
  }
  return t.length - tIndex;
}
