export function countBinarySubstrings(s: string): number {
  let previousGroupLength = 0;
  let currentGroupLength = 1;
  let total = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currentGroupLength++;
    } else {
      total += Math.min(previousGroupLength, currentGroupLength);
      previousGroupLength = currentGroupLength;
      currentGroupLength = 1;
    }
  }

  total += Math.min(previousGroupLength, currentGroupLength);

  return total;
}
