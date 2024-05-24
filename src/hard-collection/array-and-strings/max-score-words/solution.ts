export function maxScoreWords(
  words: string[],
  letters: string[],
  score: number[],
): number {
  const lettersMap = new Map<string, number>();
  for (const letter of letters) {
    if (!lettersMap.has(letter)) {
      lettersMap.set(letter, 0);
    }
    lettersMap.set(letter, lettersMap.get(letter)! + 1);
  }

  const wordsMap = new Map<string, Map<string, number>>();
  for (const word of words) {
    if (wordsMap.has(word)) {
      continue;
    }
    wordsMap.set(word, getWordMap(word));
  }

  words = words.filter((word) =>
    canTakeWord(new Map(), wordsMap.get(word)!, lettersMap),
  );

  const wordsScore = new Map<string, number>();
  for (const word of words) {
    if (wordsScore.has(word)) {
      continue;
    }
    wordsScore.set(word, getWordScore(wordsMap.get(word)!, score));
  }

  function dfs(index: number, takenLetters: Map<string, number>): number {
    if (index === words.length) {
      return 0;
    }

    // skip word
    const skipResult = dfs(index + 1, takenLetters);

    // take word
    let takeResult = 0;
    if (canTakeWord(takenLetters, wordsMap.get(words[index])!, lettersMap)) {
      for (const letter of words[index]) {
        if (!takenLetters.has(letter)) {
          takenLetters.set(letter, 0);
        }
        takenLetters.set(letter, takenLetters.get(letter)! + 1);
      }
      takeResult = wordsScore.get(words[index])! + dfs(index + 1, takenLetters);
      for (const letter of words[index]) {
        takenLetters.set(letter, takenLetters.get(letter)! - 1);
      }
    }

    return Math.max(skipResult, takeResult);
  }

  const result = dfs(0, new Map());
  return result;
}

function getWordScore(map: Map<string, number>, score: number[]): number {
  let totalScore = 0;
  for (const [letter, count] of map) {
    const index = letter.charCodeAt(0) - "a".charCodeAt(0);
    totalScore += score[index] * count;
  }
  return totalScore;
}

function getWordMap(word: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const letter of word) {
    if (!map.has(letter)) {
      map.set(letter, 0);
    }
    map.set(letter, map.get(letter)! + 1);
  }
  return map;
}

function canTakeWord(
  takenLetters: Map<string, number>,
  word: Map<string, number>,
  letters: Map<string, number>,
): boolean {
  for (const [letter, count] of word) {
    if ((takenLetters.get(letter) ?? 0) + count > (letters.get(letter) ?? 0)) {
      return false;
    }
  }
  return true;
}
