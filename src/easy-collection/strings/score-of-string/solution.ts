export function scoreOfString(s: string): number {
  let result = 0;
  for (let i = 1; i < s.length; i++) {
    result += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return result;
}
