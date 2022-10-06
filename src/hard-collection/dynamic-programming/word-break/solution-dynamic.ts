export function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set<string>(wordDict);
  const results = new Array<boolean>(s.length + 1).fill(false);
  results[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (results[j] && wordSet.has(s.substring(j, i))) {
        results[i] = true;
        break;
      }
    }
  }
  return results[s.length];
}
