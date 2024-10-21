export function maxUniqueSplit(s: string): number {
  let set = new Set<string>();
  let result = backTrack(0, s, set);
  return result;
}

function backTrack(pos: number, s: string, set: Set<string>): number {
  if (pos === s.length) {
    return 0;
  }
  let maxCount = 0;
  for (let i = pos + 1; i <= s.length; i++) {
    const substr = s.substring(pos, i);
    if (!set.has(substr)) {
      set.add(substr);
      maxCount = Math.max(maxCount, 1 + backTrack(i, s, set));
      set.delete(substr);
    }
  }
  return maxCount;
}
