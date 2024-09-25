export function sumPrefixScores(words: string[]): number[] {
  const root: TrieNode = { count: 0, children: {} };
  for (const word of words) {
    let node = root;
    for (const ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = { count: 0, children: {} };
      }
      node = node.children[ch];
      node.count += 1;
    }
  }

  let result: number[] = [];
  for (const word of words) {
    let node = root;
    let sum = 0;
    for (const ch of word) {
      node = node.children[ch];
      sum += node.count;
    }
    result.push(sum);
  }
  return result;
}

interface TrieNode {
  count: number;
  children: { [key: string]: TrieNode };
}
