export function isMatch(s: string, p: string): boolean {
  const sLen = s.length;
  const pLen = p.length;
  let sIdx = 0;
  let pIdx = 0;
  let starIdx = -1;
  let sTmpIdx = -1;

  while (sIdx < sLen) {
    // If the pattern character = string character
    // or pattern character = '?'
    if (pIdx < pLen && (p[pIdx] === "?" || p[pIdx] === s[sIdx])) {
      ++sIdx;
      ++pIdx;

      // If pattern character = '*'
    } else if (pIdx < pLen && p[pIdx] === "*") {
      // Check the situation
      // when '*' matches no characters
      starIdx = pIdx;
      sTmpIdx = sIdx;
      ++pIdx;

      // If pattern character != string character
      // or pattern is used up
      // and there was no '*' character in pattern
    } else if (starIdx === -1) {
      return false;

      // If pattern character != string character
      // or pattern is used up
      // and there was '*' character in pattern before
    } else {
      // Backtrack: check the situation
      // when '*' matches one more character
      pIdx = starIdx + 1;
      sIdx = sTmpIdx + 1;
      sTmpIdx = sIdx;
    }
  }

  // The remaining characters in the pattern should all be '*' characters
  for (let i = pIdx; i < pLen; i++) {
    if (p[i] !== "*") {
      return false;
    }
  }
  return true;
}
