export function addSpaces(s: string, spaces: number[]): string {
  const result: string[] = [];
  let spaceIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[spaceIndex]) {
      result.push(" ");
      spaceIndex++;
    }
    result.push(s[i]);
  }
  return result.join("");
}
