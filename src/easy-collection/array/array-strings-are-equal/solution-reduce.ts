export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const word1String = word1.reduce((acc, curr) => acc + curr);
  const word2String = word2.reduce((acc, curr) => acc + curr);
  return word1String === word2String;
}
