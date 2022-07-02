export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordMap = new Map();
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const changedWord = word.slice(0, i) + "*" + word.slice(i + 1);
      if (!wordMap.has(changedWord)) {
        wordMap.set(changedWord, []);
      }
      wordMap.get(changedWord).push(word);
    }
  }
  let queue = [beginWord];
  let passedWords = new Set();
  let level = 1;
  while (queue.length > 0) {
    const next = [];
    for (let word of queue) {
      if (passedWords.has(word)) {
        continue;
      }
      passedWords.add(word);
      if (word === endWord) {
        return level;
      }
      for (let i = 0; i < word.length; i++) {
        const changedWord = word.slice(0, i) + "*" + word.slice(i + 1);
        if (wordMap.has(changedWord)) {
          next.push(...wordMap.get(changedWord));
        }
      }
    }
    level++;
    queue = next;
  }
  return 0;
}
