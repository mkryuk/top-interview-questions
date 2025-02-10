export function clearDigits(s: string): string {
  const result: string[] = [];
  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      result.pop();
    } else {
      result.push(ch);
    }
  }
  return result.join("");
}
