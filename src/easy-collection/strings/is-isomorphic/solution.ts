export function isIsomorphic(s: string, t: string): boolean {
  const map = new Map<string, string>();
  const set = new Set<string>();
  if (s.length !== t.length) {
    return false;
  }
  const n = s.length;
  const sToT = new Array(n);
  for (let i = 0; i < n; i++) {
    // if we don't have s[i] character
    if (!map.has(s[i])) {
      // and already have t[i] character means that we map
      // two different s characters to one t character
      if (set.has(t[i])) {
        return false;
      }
      set.add(t[i]);
      map.set(s[i], t[i]);
    }
    sToT[i] = map.get(s[i]);
  }

  return t === sToT.join("");
}
