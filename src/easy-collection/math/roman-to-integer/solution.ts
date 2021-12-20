export function romanToInt(s: string): number {
  const romans = new Map<string, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  const exceptions = new Map<string, string[]>([
    ["I", ["V", "X"]],
    ["X", ["L", "C"]],
    ["C", ["D", "M"]],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      exceptions.has(s[i]) &&
      i < s.length - 1 &&
      exceptions.get(s[i])?.includes(s[i + 1])
    ) {
      result -= romans.get(s[i]) ?? 0;
    } else {
      result += romans.get(s[i]) ?? 0;
    }
  }
  return result;
}
