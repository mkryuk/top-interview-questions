export function isMatch(s: string, p: string): boolean {
  const sLen = s.length;
  const pLen = p.length;

  // base cases
  if (p === s) {
    return true;
  }

  if (pLen > 0 && p.match(/^\*+$/)) {
    return true;
  }

  if (!p.length || !s.length) {
    return false;
  }

  // init all matrix except [0][0] element as False
  let d: boolean[][] = new Array(pLen + 1);
  for (let i = 0; i < pLen + 1; i++) {
    d[i] = new Array(sLen + 1).fill(false);
  }

  d[0][0] = true;

  // DP compute
  for (let pIdx = 1; pIdx < pLen + 1; pIdx++) {
    // the current character in the pattern is '*'
    if (p[pIdx - 1] === "*") {
      let sIdx = 1;

      // d[p_idx - 1][s_idx - 1] is a string-pattern match
      // on the previous step, i.e. one character before.
      // Find the first idx in string with the previous match.
      while (!d[pIdx - 1][sIdx - 1] && sIdx < sLen + 1) {
        sIdx++;
      }

      // If (string) matches (pattern),
      // when (string) matches (pattern)* as well
      d[pIdx][sIdx - 1] = d[pIdx - 1][sIdx - 1];

      // If (string) matches (pattern),
      // when (string)(whatever_characters) matches (pattern)* as well
      while (sIdx < sLen + 1) {
        d[pIdx][sIdx++] = true;
      }

      // the current character in the pattern is '?'
    } else if (p[pIdx - 1] === "?") {
      for (let sIdx = 1; sIdx < sLen + 1; sIdx++) {
        d[pIdx][sIdx] = d[pIdx - 1][sIdx - 1];
      }

      // the current character in the pattern is not '*' or '?'
    } else {
      for (let sIdx = 1; sIdx < sLen + 1; sIdx++) {
        // Match is possible if there is a previous match
        // and current characters are the same
        d[pIdx][sIdx] = d[pIdx - 1][sIdx - 1] && p[pIdx - 1] === s[sIdx - 1];
      }
    }
  }

  return d[pLen][sLen];
}
