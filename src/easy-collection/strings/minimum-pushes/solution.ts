export function minimumPushes(word: string): number {
  const length = word.length;
  const fullLevels = Math.floor(length / 8);
  const remainingLetters = length % 8;
  return (fullLevels + 1) * (4 * fullLevels + remainingLetters);
}
