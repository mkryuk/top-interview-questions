export function minimumDeletions(word: string, k: number): number {
  const charCount = new Map<string, number>();
  for (const ch of word) {
    charCount.set(ch, (charCount.get(ch) ?? 0) + 1);
  }

  let result = word.length;
  for (const a of charCount.values()) {
    let deleted = 0;
    for (const b of charCount.values()) {
      if (a > b) {
        deleted += b;
      } else if (b > a + k) {
        deleted += b - (a + k);
      }
    }
    result = Math.min(result, deleted);
  }
  return result;
}
