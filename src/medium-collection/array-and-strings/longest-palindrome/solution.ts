export function longestPalindrome(words: string[]): number {
  const count: Map<string, number> = new Map<string, number>();
  for (const word of words) {
    count.set(word, (count.get(word) ?? 0) + 1);
  }

  let result = 0;
  let hasCenter = false;
  for (const [w, c] of count) {
    // if it's a palindrome itself, like "gg"
    if (w[0] === w[1]) {
      const pairs = Math.floor(c / 2);
      // each pair contributes 4 chars
      result += pairs * 4;
      // if there's an unpaired one left, it could go in the center
      if (c % 2 !== 0) {
        hasCenter = true;
      }
    } else {
      const rev = w[1] + w[0];
      // to avoid double counting, only handle when w < rev lexicographically
      if (w < rev && count.has(rev)) {
        const pairs = Math.min(c, count.get(rev)!);
        result += pairs * 4;
      }
    }
  }
  // if any palindromic word had an odd leftover
  // we can put one in the center
  if (hasCenter) {
    result += 2;
  }
  return result;
}
