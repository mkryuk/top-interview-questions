export function decodeString(s: string): string {
  let openBraceIdx = s.indexOf("[");
  while (openBraceIdx !== -1) {
    let numIdx = openBraceIdx - 1;
    while (numIdx > 0 && /^\d$/.test(s[numIdx - 1])) {
      numIdx--;
    }
    const num = parseInt(s.substring(numIdx, openBraceIdx), 10);
    const closeBraceIdx = findCloseBraceIndex(openBraceIdx + 1, s);
    const substr = s.substring(openBraceIdx + 1, closeBraceIdx);
    const parsedSubstr = decodeString(substr);
    const repeatedSubstr = parsedSubstr.repeat(num);
    s =
      s.substring(0, numIdx) + repeatedSubstr + s.substring(closeBraceIdx + 1);
    openBraceIdx = s.indexOf("[");
  }
  return s;
}

function findCloseBraceIndex(fromIdx: number, s: string): number {
  let openBraceCount = 0;
  for (let i = fromIdx; i < s.length; i++) {
    if (s[i] === "[") {
      openBraceCount++;
    }
    if (s[i] === "]" && openBraceCount === 0) {
      return i;
    }
    if (s[i] === "]" && openBraceCount !== 0) {
      openBraceCount--;
    }
  }
  return -1;
}
