export function lengthOfLastWord(s: string): number {
  let lastSpaceIndex = s.length - 1;
  while (s[lastSpaceIndex] === " ") {
    lastSpaceIndex--;
  }
  let firstSpaceIndex = lastSpaceIndex;
  while (firstSpaceIndex >= 0 && s[firstSpaceIndex] !== " ") {
    firstSpaceIndex--;
  }

  return lastSpaceIndex - firstSpaceIndex;
}
