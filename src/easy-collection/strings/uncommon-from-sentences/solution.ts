export function uncommonFromSentences(s1: string, s2: string): string[] {
  const combined = [...s1.split(" "), ...s2.split(" ")];
  const wordCount = new Map<string, number>();
  for (const word of combined) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  }

  return Array.from(wordCount)
    .filter(([word, count]) => count === 1)
    .map(([word]) => word);
}
