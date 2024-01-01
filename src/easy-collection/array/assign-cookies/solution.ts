export function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => b - a);
  s.sort((a, b) => b - a);
  let result = 0;
  for (let gIdx = 0, sIdx = 0; gIdx < g.length && sIdx < s.length; gIdx++) {
    if (s[sIdx] >= g[gIdx]) {
      result++;
      sIdx++;
    }
  }
  return result;
}
