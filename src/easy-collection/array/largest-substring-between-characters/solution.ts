export function maxLengthBetweenEqualCharacters(s: string): number {
  const charSection = new Map<string, number[]>();
  for (let i = 0; i < s.length; i++) {
    if (!charSection.has(s[i])) {
      charSection.set(s[i], [i, -1]);
    } else {
      let [start] = charSection.get(s[i])!;
      charSection.set(s[i], [start, i]);
    }
  }

  let result = -1;
  for (const [char, [start, end]] of charSection) {
    result = Math.max(result, end - start - 1);
  }
  return result;
}
