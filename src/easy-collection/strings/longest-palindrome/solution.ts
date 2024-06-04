export function longestPalindrome(s: string): number {
  let map = new Map<string, number>();
  for (const ch of s) {
    if (!map.has(ch)) {
      map.set(ch, 0);
    }
    map.set(ch, map.get(ch)! + 1);
  }

  let result = 0;
  let hasOdd = false;
  for (const [ch, num] of map) {
    const remainder = num % 2;
    result += num - remainder;
    if (remainder !== 0) {
      hasOdd = true;
    }
  }

  return result + (hasOdd ? 1 : 0);
}
