export function wordSubsets(words1: string[], words2: string[]): string[] {
  let maxFreq = new Array(26).fill(0);

  for (const word of words2) {
    const charFreq = getCharFrequency(word);
    for (let i = 0; i < 26; i++) {
      maxFreq[i] = Math.max(maxFreq[i], charFreq[i]);
    }
  }

  return words1.filter((word) => isUniversalWord(word, maxFreq));
}

function getCharFrequency(word: string): number[] {
  let frequency = new Array(26).fill(0);
  for (const char of word) {
    frequency[char.charCodeAt(0) - 97]++;
  }
  return frequency;
}

function isUniversalWord(word: string, requiredFrequency: number[]): boolean {
  const wordFrequency = getCharFrequency(word);
  return requiredFrequency.every((count, index) => wordFrequency[index] >= count);
}
