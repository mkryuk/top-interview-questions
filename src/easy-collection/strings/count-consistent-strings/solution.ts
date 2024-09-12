export function countConsistentStrings(allowed: string, words: string[]): number {
  let allowedSet = new Set(allowed);
  let result = 0;
  for (const word of words) {
    result += word.split("").every((ch) => allowedSet.has(ch)) ? 1 : 0;
  }
  return result;
}
