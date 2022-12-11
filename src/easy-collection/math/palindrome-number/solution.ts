export function isPalindrome(x: number): boolean {
  const str = x.toString();
  const n = str.length;
  for (let i = 0; i < Math.trunc(n / 2); i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false;
    }
  }
  return true;
}
