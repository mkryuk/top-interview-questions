export function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenLettersSet = new Set(brokenLetters);
  let result = 0;
  for (const word of text.split(" ")) {
    let broken = false;
    for (const letter of word) {
      if (brokenLettersSet.has(letter)) {
        broken = true;
        break;
      }
    }
    if (!broken) {
      result++;
    }
  }
  return result;
}
