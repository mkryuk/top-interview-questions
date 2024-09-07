export function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  let wordMap = new Map<string, Word>();
  let passedWords = new Set<string>();
  let queue: Word[] = [];
  let begin = new Word(beginWord, wordList);
  queue.push(begin);
  let result = 0;
  while (queue.length) {
    result++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      if (node.word === endWord) {
        return result;
      }
      passedWords.add(node.word);
      let neighbors = node.neighbors;
      for (let j = 0; j < neighbors.length; j++) {
        if (!passedWords.has(neighbors[j])) {
          let word = wordMap.get(neighbors[j]) ?? new Word(neighbors[j], wordList);
          wordMap.set(neighbors[j], word);
          queue.push(word);
        }
      }
    }
  }
  return 0;
}

class Word {
  word: string;
  neighbors: string[];

  constructor(word: string, wordList: string[]) {
    this.word = word;
    this.neighbors = [];
    this.addNeighbors(wordList);
  }

  private addNeighbors(wordList: string[]): void {
    for (let i = 0; i < wordList.length; i++) {
      if (this.isNeighbor(this.word, wordList[i])) {
        this.neighbors.push(wordList[i]);
      }
    }
  }

  private isNeighbor(left: string, right: string): boolean {
    let distance = 0;
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== right[i]) {
        distance++;
      }
      if (distance > 1) {
        return false;
      }
    }
    return distance === 1;
  }
}
