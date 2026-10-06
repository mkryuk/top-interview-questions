export function scoreOfParentheses(s: string): number {
  let result = 0;
  let depth = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      depth++;
    } else {
      depth--;

      // only primitive "()" pairs add score directly
      if (s[i - 1] === "(") {
        result += 2 ** depth;
      }
    }
  }

  return result;
}
