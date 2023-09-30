export function countPalindromicSubsequence(s: string): number {
  let res = 0;
  Array.from({ length: 26 }, (_, v) => String.fromCharCode(97 + v)).forEach(
    (ch) => {
      const [l, r] = [s.indexOf(ch), s.lastIndexOf(ch)];
      if (l >= 0) {
        res += new Set(s.slice(l + 1, r).split("")).size;
      }
    },
  );
  return res;
}
