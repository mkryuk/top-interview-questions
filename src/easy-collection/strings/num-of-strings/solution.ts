export function numOfStrings(patterns: string[], word: string): number {
  let result = 0;
  for (const str of patterns) {
    if (word.includes(str)) {
      result++;
    }
  }
  return result;
}
