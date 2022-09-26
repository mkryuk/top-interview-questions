export function numDecodings(s: string): number {
  let twoBack = 1;
  let oneBack = s[0] === "0" ? 0 : 1;
  for (let i = 2; i < s.length + 1; i++) {
    let current = s[i - 1] === "0" ? 0 : oneBack;
    const pair = parseInt(s.substring(i - 2, i), 10);
    if (pair >= 10 && pair <= 26) {
      current += twoBack;
    }
    twoBack = oneBack;
    oneBack = current;
  }
  return oneBack;
}
