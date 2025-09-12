export function doesAliceWin(s: string): boolean {
  for (let i = 0; i < s.length; i += 1) {
    const ch = s[i];
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      return true;
    }
  }
  return false;
}
