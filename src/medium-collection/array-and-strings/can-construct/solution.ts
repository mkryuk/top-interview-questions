export function canConstruct(s: string, k: number): boolean {
  if (s.length < k) {
    return false;
  }
  const charCount = new Map<string, number>();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }
  let oddCount = 0;
  for (const [char, count] of charCount) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount <= k;
}
