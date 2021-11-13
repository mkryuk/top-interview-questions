export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const as = s.split("");
  as.sort();
  const at = t.split("");
  at.sort();
  for (let i = 0; i < as.length; i++) {
    if (as[i] !== at[i]) {
      return false;
    }
  }
  return true;
}
