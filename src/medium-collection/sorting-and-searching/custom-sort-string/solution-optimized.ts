export function customSortString(order: string, s: string): string {
  const frequencyMap = new Map<string, number>();
  for (const char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) ?? 0) + 1);
  }
  let result: string[] = [];
  for (const char of order) {
    result.push(char.repeat(frequencyMap.get(char)!));
    frequencyMap.set(char, 0);
  }

  for (const [char, count] of frequencyMap) {
    if (count > 0) {
      result.push(char.repeat(count));
    }
  }
  return result.join("");
}
