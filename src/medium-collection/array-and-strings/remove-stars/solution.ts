export function removeStars(s: string): string {
  const result: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "*") {
      result.push(s[i]);
    } else {
      result.pop();
    }
  }
  return result.join("");
}
