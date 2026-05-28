export function numberOfSpecialChars(word: string): number {
  const lowerLast: number[] = new Array(26).fill(-1);
  const upperFirst: number[] = new Array(26).fill(-1);

  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    if (isSmallLetter(word[i])) {
      const index = charCode - "a".charCodeAt(0);
      lowerLast[index] = i;
    } else {
      const index = charCode - "A".charCodeAt(0);
      if (upperFirst[index] === -1) {
        upperFirst[index] = i;
      }
    }
  }

  let result = 0;
  for (let i = 0; i < 26; i++) {
    const hasLowercase = lowerLast[i] !== -1;
    const hasUppercase = upperFirst[i] !== -1;
    if (hasLowercase && hasUppercase && lowerLast[i] < upperFirst[i]) {
      result++;
    }
  }

  return result;
}

function isSmallLetter(char: string): boolean {
  const charCode = char.charCodeAt(0);
  return charCode > 96 && charCode < 123;
}
