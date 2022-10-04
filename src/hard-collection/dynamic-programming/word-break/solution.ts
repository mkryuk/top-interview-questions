export function wordBreak(s: string, wordDict: string[]): boolean {
  let result = stringHasWord(s, 0, wordDict, new Map());
  return result;
}

function stringHasWord(
  s: string,
  pos: number,
  wordDict: string[],
  map: Map<number, boolean>,
): boolean {
  if (pos === s.length) {
    return true;
  }
  if (map.has(pos)) {
    return map.get(pos)!;
  }
  for (let i = 0; i < wordDict.length; i++) {
    if (s.startsWith(wordDict[i], pos)) {
      let result = stringHasWord(s, pos + wordDict[i].length, wordDict, map);
      if (result) {
        return true;
      }
    }
  }
  // if previous check for this position was failed
  // we should not to check it again
  map.set(pos, false);
  return false;
}
