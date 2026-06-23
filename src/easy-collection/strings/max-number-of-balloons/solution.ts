export function maxNumberOfBalloons(text: string): number {
  const counts = new Map<string, number>();

  // count every character in the input

  for (const char of text) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }

  // "balloon" needs:
  // b: 1, a: 1, l: , o: 2, n: 1
  const bCount = counts.get("b") ?? 0;
  const aCount = counts.get("a") ?? 0;
  const lCount = Math.floor((counts.get("l") ?? 0) / 2);
  const oCount = Math.floor((counts.get("o") ?? 0) / 2);
  const nCount = counts.get("n") ?? 0;
  return Math.min(bCount, aCount, lCount, oCount, nCount);
}
