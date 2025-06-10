export function maxDifference(s: string): number {
  const n = s.length;
  const freq = new Array(26).fill(0);
  let maxOdd = 1;
  let minEven = n;
  for (let i = 0; i < n; i++) {
    const idx = s.charCodeAt(i) - 97;
    freq[idx]++;
  }
  for (const f of freq) {
    if (f === 0) {
      continue;
    }
    if (f % 2 === 0) {
      minEven = Math.min(minEven, f);
    } else {
      maxOdd = Math.max(maxOdd, f);
    }
  }
  const result = maxOdd - minEven;
  return result;
}
