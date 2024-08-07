export function minimumPushes(word: string): number {
  const countMap = new Map<string, number>();
  for (const char of word) {
    if (!countMap.has(char)) {
      countMap.set(char, 0);
    }
    countMap.set(char, countMap.get(char)! + 1);
  }

  const sortedCounts = Array.from(countMap.values()).sort(
    (count1, count2) => count2 - count1,
  );

  let result = 0;
  let keyIndex = 0;
  for (const count of sortedCounts) {
    const position = Math.floor(keyIndex / 8) + 1;
    result += count * position;
    keyIndex++;
  }
  return result;
}
