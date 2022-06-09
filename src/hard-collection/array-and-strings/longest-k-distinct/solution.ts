export function lengthOfLongestSubstringKDistinct(
  s: string,
  k: number,
): number {
  let map = new Map<string, number>();
  let start = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
    if (map.size > k) {
      let arr = Array.from(map, ([key, value]) => ({ key, value }));
      const [first] = arr.sort((a, b) => a.value - b.value);
      start = first.value + 1;
      map.delete(first.key);
    }
    result = Math.max(i - start + 1, result);
  }
  return result;
}
