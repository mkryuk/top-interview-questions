export function possibleStringCount(word: string): number {
  let result = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      result++;
    }
  }
  return result;
}
