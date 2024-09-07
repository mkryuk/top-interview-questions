export function commonChars(words: string[]): string[] {
  const wordsMap: Map<string, number>[] = Array.from({ length: words.length }, () => new Map<string, number>());
  const charSet = new Set<string>();
  for (let i = 0; i < words.length; i++) {
    for (const char of words[i]) {
      if (!wordsMap[i].has(char)) {
        wordsMap[i].set(char, 0);
      }
      wordsMap[i].set(char, wordsMap[i].get(char)! + 1);
      charSet.add(char);
    }
  }

  let result = [];
  for (const char of charSet) {
    if (!wordsMap[0].has(char)) {
      continue;
    }
    let charToAdd = true;
    let charCount = wordsMap[0].get(char)!;
    for (const wordMap of wordsMap) {
      if (!wordMap.has(char)) {
        charToAdd = false;
        break;
      }
      charCount = Math.min(charCount, wordMap.get(char)!);
    }

    if (charToAdd) {
      for (let i = 0; i < charCount; i++) {
        result.push(char);
      }
    }
  }
  return result;
}
