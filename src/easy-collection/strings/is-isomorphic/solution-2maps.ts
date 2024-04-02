export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const mapST = new Map<string, string>();
  const mapTS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check mapping from s to t
    if (mapST.has(charS) && mapST.get(charS) !== charT) {
      return false;
    } else {
      mapST.set(charS, charT);
    }

    // Check mapping from t to s
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
      return false;
    } else {
      mapTS.set(charT, charS);
    }
  }

  return true;
}
