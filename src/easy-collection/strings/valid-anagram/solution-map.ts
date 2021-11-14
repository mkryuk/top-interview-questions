type StrMap = { [k: string]: number };
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const sMap = mapString(s);
  const tMap = mapString(t);
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (sMap[el] !== tMap[el]) {
      return false;
    }
  }
  return true;
}

function mapString(s: string): StrMap {
  const map: StrMap = {};
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    map[el] = map[el] === undefined ? 1 : map[el] + 1;
  }
  return map;
}
