export function makeGood(s: string): string {
  let result: string[] = [];
  for (const char of s) {
    if (
      result.length > 0 &&
      areOppositeCases(char, result[result.length - 1])
    ) {
      result.pop();
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

function areOppositeCases(char1: string, char2: string): boolean {
  return (
    char1 !== char2 && char1.toLocaleLowerCase() === char2.toLocaleLowerCase()
  );
}
