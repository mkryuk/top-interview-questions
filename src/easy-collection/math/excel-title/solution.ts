export function convertToTitle(columnNumber: number): string {
  const base = 26;
  const aIndex = "A".charCodeAt(0);
  let result: string[] = [];
  while (columnNumber > 0) {
    // we should decrease number by 1 every time
    // since we count from 1 not 0, meaning A -> 1 instead or A -> 0
    columnNumber--;
    const rest = columnNumber % base;
    columnNumber = Math.trunc(columnNumber / base);
    const letter = String.fromCharCode(aIndex + rest);
    result.unshift(letter);
  }
  return result.join("");
}
