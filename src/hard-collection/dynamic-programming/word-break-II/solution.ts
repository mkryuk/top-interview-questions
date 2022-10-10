export function wordBreak(s: string, wordDict: string[]): string[] {
  const wordSet = new Set<string>(wordDict);
  const sentences = dfs(s, wordSet, new Map<string, string[][]>());
  const result = sentences.map((sentence) => sentence.join(" "));
  return result;
}

function dfs(
  s: string,
  wordSet: Set<string>,
  wordMap: Map<string, string[][]>,
): string[][] {
  if (s.length === 0) {
    return [[]];
  }
  if (wordMap.has(s)) {
    return wordMap.get(s)!;
  }
  wordMap.set(s, []);
  for (let i = 1; i <= s.length; i++) {
    const word = s.substring(0, i);
    if (wordSet.has(word)) {
      const subSentence = dfs(s.substring(i), wordSet, wordMap);
      for (let i = 0; i < subSentence.length; i++) {
        const newSentence = [word, ...subSentence[i]];
        wordMap.get(s)!.push(newSentence);
      }
    }
  }
  return wordMap.get(s)!;
}
