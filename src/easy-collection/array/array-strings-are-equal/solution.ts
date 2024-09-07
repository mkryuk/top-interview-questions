export function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  let wordsIterator1 = makeWordsIterator(word1);
  let wordsIterator2 = makeWordsIterator(word2);
  let words1IteratorResult = wordsIterator1.next();
  let words2IteratorResult = wordsIterator2.next();
  while (!words1IteratorResult.done || !words2IteratorResult.done) {
    if (words1IteratorResult.value !== words2IteratorResult.value) {
      return false;
    }
    words1IteratorResult = wordsIterator1.next();
    words2IteratorResult = wordsIterator2.next();
  }
  return true;
}

function* makeWordsIterator(words: string[]) {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      yield words[i][j];
    }
  }
}
