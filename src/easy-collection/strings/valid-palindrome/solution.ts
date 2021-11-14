export function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let li = 0,
    ri = s.length - 1;

  while (li <= ri) {
    if (!isAlphaNumeric(s, li)) {
      li++;
      continue;
    }
    if (!isAlphaNumeric(s, ri)) {
      ri--;
      continue;
    }
    if (s[li] !== s[ri]) {
      return false;
    }
    li++;
    ri--;
  }
  return true;
}
const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);
const zeroCharCode = "0".charCodeAt(0);
const nineCharCode = "9".charCodeAt(0);
function isAlphaNumeric(s: string, i: number) {
  return (
    (s.charCodeAt(i) >= aCharCode && s.charCodeAt(i) <= zCharCode) ||
    (s.charCodeAt(i) >= zeroCharCode && s.charCodeAt(i) <= nineCharCode)
  );
}
