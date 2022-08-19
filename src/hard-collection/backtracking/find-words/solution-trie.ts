import { Trie } from "../../../medium-collection/trees-and-graphs/implement-trie/solution";

export function findWords(board: string[][], words: string[]): string[] {
  let result: string[] = [];
  let trie = new Trie();
  // fill trie with words
  words.forEach((word) => {
    trie.insert(word);
  });

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs("", board, i, j, result, trie);
    }
  }
  return result;
}

function dfs(
  prefix: string,
  board: string[][],
  i: number,
  j: number,
  result: string[],
  trie: Trie,
): void {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }
  prefix += board[i][j];

  if (!trie.startsWith(prefix)) {
    return;
  }

  if (trie.search(prefix)) {
    result.push(prefix);
    trie.delete(prefix);
  }

  board[i][j] = board[i][j].toUpperCase();
  const offsets = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  offsets.forEach(([col, row]) => {
    dfs(prefix, board, i + row, j + col, result, trie);
  });
  board[i][j] = board[i][j].toLowerCase();
}
