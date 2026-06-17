export function processStr(s: string): string {
  const result: string[] = [];

  for (const ch of s) {
    if (ch >= "a" && ch <= "z") {
      // append lowercase letter
      result.push(ch);
    } else if (ch === "*") {
      // remove last character if it exists
      if (result.length > 0) {
        result.pop();
      }
    } else if (ch === "#") {
      // duplicate current result
      result.push(...result);
    } else if (ch === "%") {
      // reverse current result
      result.reverse();
    }
  }

  return result.join("");
}
