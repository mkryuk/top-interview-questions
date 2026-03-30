export function canBeEqual(s1: string, s2: string): boolean {
  const s1Even = [s1[0], s1[2]].sort().join("");
  const s2Even = [s2[0], s2[2]].sort().join("");
  const s1Odd = [s1[1], s1[3]].sort().join("");
  const s2Odd = [s2[1], s2[3]].sort().join("");
  if (s1Even !== s2Even) {
    return false;
  }
  if (s1Odd !== s2Odd) {
    return false;
  }
  return true;
}
