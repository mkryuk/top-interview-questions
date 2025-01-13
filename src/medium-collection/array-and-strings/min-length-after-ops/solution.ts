export function minimumLength(s: string): number {
  const charCount = new Array(26).fill(0);
  for (const char of s) {
    charCount[char.charCodeAt(0) - 97]++;
  }
  let result = 0;
  for (const count of charCount) {
    if (count === 0) {
      continue;
    }
    result += count % 2 === 0 ? 2 : 1;
  }
  return result;
}
