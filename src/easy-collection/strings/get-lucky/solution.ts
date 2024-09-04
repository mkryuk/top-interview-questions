export function getLucky(s: string, k: number): number {
  let numericString = s
    .split("")
    .map((val) => (val.charCodeAt(0) - 96).toString())
    .join("");
  let result = parseInt(numericString, 10);
  for (let i = 0; i < k; i++) {
    result = result
      .toString()
      .split("")
      .reduce((sum, char) => sum + parseInt(char, 10), 0);

    numericString = numericString
      .split("")
      .reduce((sum, char) => sum + parseInt(char, 10), 0)
      .toString();
  }
  return parseInt(numericString, 10);
}
