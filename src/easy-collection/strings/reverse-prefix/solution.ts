export function reversePrefix(word: string, ch: string): string {
  const index = word.indexOf(ch);
  const result =
    word
      .slice(0, index + 1)
      .split("")
      .reverse()
      .join("") + word.slice(index + 1);
  return result;
}
