export function stringIndices(wordsContainer: string[], wordsQuery: string[]): number[] {
  const root = new TrieNode();
  for (let index = 0; index < wordsContainer.length; index++) {
    insertWord(root, wordsContainer[index], index);
  }
  const result: number[] = [];
  for (const query of wordsQuery) {
    result.push(findBestIndex(root, query));
  }
  return result;
}

class TrieNode {
  public children: Array<TrieNode | null>;
  public bestIndex: number;
  public bestLength: number;
  public constructor() {
    this.children = new Array<TrieNode | null>(26).fill(null);
    this.bestIndex = -1;
    this.bestLength = Number.MAX_SAFE_INTEGER;
  }
}

function insertWord(root: TrieNode, word: string, index: number): void {
  let node = root;
  updateBestCandidate(node, word.length, index);
  for (let i = word.length - 1; i >= 0; i--) {
    const charIndex = getCharIndex(word, i);
    if (node.children[charIndex] === null) {
      node.children[charIndex] = new TrieNode();
    }
    node = node.children[charIndex]!;
    updateBestCandidate(node, word.length, index);
  }
}

function findBestIndex(root: TrieNode, query: string): number {
  let node = root;
  let answer = node.bestIndex;
  for (let i = query.length - 1; i >= 0; i--) {
    const charIndex = getCharIndex(query, i);
    const nextNode = node.children[charIndex];
    if (nextNode === null) {
      break;
    }
    node = nextNode;
    answer = node.bestIndex;
  }
  return answer;
}

function updateBestCandidate(node: TrieNode, wordLength: number, index: number): void {
  if (wordLength < node.bestLength) {
    node.bestLength = wordLength;
    node.bestIndex = index;
    return;
  }
  if (wordLength === node.bestLength && index < node.bestIndex) {
    node.bestIndex = index;
  }
}

function getCharIndex(word: string, index: number): number {
  return word.charCodeAt(index) - 97;
}
