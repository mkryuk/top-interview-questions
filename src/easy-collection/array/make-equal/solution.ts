export function makeEqual(words: string[]): boolean {
  let charNum = new Map<string, number>();
  for (const word of words) {
    for (const char of word) {
      if (!charNum.has(char)) {
        charNum.set(char, 0);
      }
      charNum.set(char, charNum.get(char)! + 1);
    }
  }

  for (const [char, num] of charNum) {
    if (num % words.length !== 0) {
      return false;
    }
  }
  return true;
}
