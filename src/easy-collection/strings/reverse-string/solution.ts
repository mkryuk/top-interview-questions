/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  for (let i = 0; i < s.length / 2; i++) {
    const temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
}
