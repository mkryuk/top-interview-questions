export function numberOfSpecialChars(word: string): number {
  let smallLettersSet = new Set<string>();
  let resultSet = new Set<string>();
  for (const char of word) {
    if (isSmallLetter(char)) {
      smallLettersSet.add(char);
    }
  }
  for (const char of word) {
    if (!isSmallLetter(char) && smallLettersSet.has(char.toLowerCase())) {
      resultSet.add(char);
    }
  }
  return resultSet.size;
}

function isSmallLetter(char: string): boolean {
  const charCode = char.charCodeAt(0);
  return charCode > 96 && charCode < 123;
}
