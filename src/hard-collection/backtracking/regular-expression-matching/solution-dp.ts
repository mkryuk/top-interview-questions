export function isMatch(s: string, p: string): boolean {
  let cache: boolean[][] = new Array(s.length + 1);
  for (let i = 0; i < s.length + 1; i++) {
    cache[i] = new Array(p.length + 1);
  }
  return dp(0, 0, s, p, cache);
}

function dp(si: number, pi: number, s: string, p: string, cache: boolean[][]): boolean {
  if (cache[si][pi] !== undefined) {
    return cache[si][pi];
  }

  let result;
  if (pi === p.length) {
    result = si === s.length;
  } else {
    const firstMatch = si < s.length && (p[pi] === s[si] || p[pi] === ".");
    if (pi + 1 < p.length && p[pi + 1] === "*") {
      result = dp(si, pi + 2, s, p, cache) || (firstMatch && dp(si + 1, pi, s, p, cache));
    } else {
      result = firstMatch && dp(si + 1, pi + 1, s, p, cache);
    }
  }
  cache[si][pi] = result;
  return result;
}
