export function mapWordWeights(words: string[], weights: number[]): string {
  const result: string[] = [];

  for (const word of words) {
    const modulo = getWordWeightModulo(word, weights);
    const mappedChar = mapModuloToReverseLetter(modulo);

    result.push(mappedChar);
  }

  return result.join("");
}

function getCharIndex(char: string): number {
  return char.charCodeAt(0) - "a".charCodeAt(0);
}

function mapModuloToReverseLetter(value: number): string {
  return String.fromCharCode("z".charCodeAt(0) - value);
}

function getWordWeightModulo(word: string, weights: number[]): number {
  let total = 0;

  for (const char of word) {
    const index = getCharIndex(char);
    total += weights[index];
  }

  return total % 26;
}
