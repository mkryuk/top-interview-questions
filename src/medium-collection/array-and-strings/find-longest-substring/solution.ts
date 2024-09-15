export function findTheLongestSubstring(s: string): number {
  const vowelToBit: { [key: string]: number } = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4,
  };
  let maskToIndex = new Map<number, number>();
  maskToIndex.set(0, -1);
  let result = 0;
  let mask = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (vowelToBit.hasOwnProperty(ch)) {
      const bit = vowelToBit[ch];
      mask ^= 1 << bit;
    }
    if (maskToIndex.has(mask)) {
      const prevIndex = maskToIndex.get(mask)!;
      result = Math.max(result, i - prevIndex);
    } else {
      maskToIndex.set(mask, i);
    }
  }
  return result;
}
