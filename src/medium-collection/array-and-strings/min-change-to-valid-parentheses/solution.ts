export function minAddToMakeValid(s: string): number {
  let left = 0;
  let right = 0;
  for (const ch of s) {
    if (ch === "(") {
      left++;
    } else {
      if (left > 0) {
        left--;
      } else {
        right++;
      }
    }
  }
  return left + right;
}
