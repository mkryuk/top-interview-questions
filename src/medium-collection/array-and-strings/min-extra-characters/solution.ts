export function minExtraChar(s: string, dictionary: string[]): number {
  let set = new Set(dictionary);
  let memo = new Map<number, number>();
  let result = dp(0, s, set, memo);
  return result;
}

function dp(
  start: number,
  s: string,
  set: Set<string>,
  memo: Map<number, number>,
): number {
  if (start === s.length) {
    return 0;
  }
  if (memo.has(start)) {
    return memo.get(start)!;
  }
  // we assume the worst scenario that we don't use this character
  let result = dp(start + 1, s, set, memo) + 1;
  for (let end = start; end < s.length; end++) {
    let substr = s.substring(start, end + 1);
    // if we found the substring in set
    if (set.has(substr)) {
      // we check how many letters left not used in this scenario
      result = Math.min(result, dp(end + 1, s, set, memo));
    }
  }
  memo.set(start, result);
  return result;
}
