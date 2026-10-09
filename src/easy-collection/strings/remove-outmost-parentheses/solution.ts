export function removeOuterParentheses(s: string): string {
  const result: string[] = [];
  let depth = 0;
  for (const char of s) {
    if (char === "(") {
      if (depth > 0) {
        result.push(char);
      }
      depth++;
    } else {
      depth--;
      if (depth > 0) {
        result.push(char);
      }
    }
  }
  return result.join("");
}
