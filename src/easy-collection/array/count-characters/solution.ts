export function countCharacters(words: string[], chars: string): number {
  const charsMap = new Map<string, number>();
  for (const char of chars) {
    charsMap.set(char, (charsMap.get(char) || 0) + 1);
  }

  let result = 0;
  for (const word of words) {
    let isGood = true;
    const wordMap = new Map(charsMap);
    // Check if the word can be formed
    for (const char of word) {
      if (!wordMap.has(char) || wordMap.get(char) === 0) {
        isGood = false;
        break;
      }
      wordMap.set(char, wordMap.get(char)! - 1);
    }

    if (isGood) {
      result += word.length;
    }
  }

  return result;
}
