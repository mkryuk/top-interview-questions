export function letterCombinations(digits: string): string[] {
  let m = new Map<string, string[]>([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  let result: string[] = [];
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const chars = m.get(digit) ?? [];
    if (result.length === 0) {
      result = chars;
      continue;
    }
    const tempResult: string[] = [];
    for (let r = 0; r < result.length; r++) {
      for (let c = 0; c < chars.length; c++) {
        tempResult.push(result[r] + chars[c]);
      }
    }
    result = tempResult;
  }
  return result;
}
