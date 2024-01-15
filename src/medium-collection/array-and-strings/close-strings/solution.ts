export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  let word1Map = new Map<string, number>();
  let word2Map = new Map<string, number>();

  for (const letter of word1) {
    if (!word1Map.has(letter)) {
      word1Map.set(letter, 0);
    }
    word1Map.set(letter, word1Map.get(letter)! + 1);
  }

  for (const letter of word2) {
    if (!word2Map.has(letter)) {
      word2Map.set(letter, 0);
    }
    word2Map.set(letter, word2Map.get(letter)! + 1);
  }

  for (const letter of word1Map.keys()) {
    if (!word2Map.has(letter)) {
      return false;
    }
  }

  let word1Counts: number[] = Array.from(word1Map.values());
  word1Counts.sort((a, b) => a - b);

  let word2Counts: number[] = Array.from(word2Map.values());
  word2Counts.sort((a, b) => a - b);

  for (let i = 0; i < word1Counts.length; i++) {
    if (word1Counts[i] !== word2Counts[i]) {
      return false;
    }
  }

  return true;
}
