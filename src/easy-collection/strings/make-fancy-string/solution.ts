export function makeFancyString(s: string): string {
  let result: string[] = [];
  for (const char of s) {
    if (
      result.length >= 2 &&
      result[result.length - 1] === result[result.length - 2] &&
      result[result.length - 1] === char
    ) {
      continue;
    }
    result.push(char);
  }
  return result.join("");
}
