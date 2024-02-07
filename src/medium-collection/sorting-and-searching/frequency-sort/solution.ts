export function frequencySort(s: string): string {
  let map = new Map<string, number>();
  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }
  let result = "";
  map = new Map([...map.entries()].sort(([ch1, fr1], [ch2, fr2]) => fr2 - fr1));
  for (const [char, frequency] of map) {
    result += char.repeat(frequency);
  }
  return result;
}
