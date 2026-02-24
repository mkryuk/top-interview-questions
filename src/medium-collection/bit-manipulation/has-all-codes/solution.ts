export function hasAllCodes(s: string, k: number): boolean {
  if (k > s.length) {
    return false;
  }

  const need = 1 << k;
  const seen = new Array<boolean>(need).fill(false);
  const mask = need - 1;
  let value = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    value = ((value << 1) & mask) | (s.charCodeAt(i) - 48);
    if (i >= k - 1 && !seen[value]) {
      seen[value] = true;
      count++;
      if (count === need) {
        return true;
      }
    }
  }

  return false;
}
