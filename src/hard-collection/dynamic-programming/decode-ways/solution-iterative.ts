export function numDecodings(s: string): number {
  const result: number[] = new Array(s.length + 1);
  result[0] = 1;
  result[1] = s[0] === "0" ? 0 : 1;
  for (let i = 2; i < result.length; i++) {
    result[i] = s[i - 1] === "0" ? 0 : result[i - 1];
    const pair = parseInt(s.substring(i - 2, i), 10);
    if (pair >= 10 && pair <= 26) {
      result[i] += result[i - 2];
    }
  }
  return result[result.length - 1];
}
