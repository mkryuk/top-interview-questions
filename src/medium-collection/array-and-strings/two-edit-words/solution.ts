export function twoEditWords(queries: string[], dictionary: string[]): string[] {
  const result: string[] = [];
  for (const query of queries) {
    if (matchesWithinTwoEdits(query, dictionary)) {
      result.push(query);
    }
  }
  return result;
}

function matchesWithinTwoEdits(word: string, dictionary: string[]): boolean {
  for (const candidate of dictionary) {
    if (countDifferences(word, candidate) <= 2) {
      return true;
    }
  }
  return false;
}

function countDifferences(a: string, b: string): number {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      diff++;

      // early stop if already too many edits
      if (diff > 2) {
        return diff;
      }
    }
  }
  return diff;
}
