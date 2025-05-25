export function findWordsContaining(words: string[], x: string): number[] {
  const result: number[] = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        result.push(i);
        break;
      }
    }
  }
  return result;
}
