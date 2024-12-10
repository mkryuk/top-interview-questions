export function maximumLength(s: string): number {
  if (s.length < 3) {
    return -1;
  }
  const map = new Map<string, number>();

  const n = s.length;
  for (let length = 1; length <= n; length++) {
    for (let start = 0; start <= n - length; start++) {
      const special = s[start].repeat(length);
      const substr = s.substring(start, start + length);
      if (substr === special) {
        map.set(substr, (map.get(substr) ?? 0) + 1);
      }
    }
  }

  let maxLength = -1;
  for (const [key, count] of map) {
    if (count >= 3 && key.length > maxLength) {
      maxLength = key.length;
    }
  }

  return maxLength;
}
