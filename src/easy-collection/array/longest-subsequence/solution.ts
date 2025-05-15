export function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const n = words.length;
  const result: string[] = [];
  result.push(words[0]);
  let currentGroup = groups[0];
  for (let i = 1; i < n; i++) {
    if (groups[i] !== currentGroup) {
      result.push(words[i]);
      currentGroup = groups[i];
    }
  }
  return result;
}
