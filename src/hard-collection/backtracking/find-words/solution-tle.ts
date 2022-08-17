export function findWords(board: string[][], words: string[]): string[] {
  let result: string[] = [];
  let indexTable = new Map<string, number[][]>();
  // fill index table with indexes for each letter
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (indexTable.has(board[i][j])) {
        let item = indexTable.get(board[i][j])!;
        item.push([i, j]);
      } else {
        indexTable.set(board[i][j], [[i, j]]);
      }
    }
  }
  while (words.length) {
    const word = words.pop()!;
    if (!indexTable.has(word[0])) {
      continue;
    }
    const indexes = indexTable.get(word[0])!;
    for (let idx = 0; idx < indexes.length; idx++) {
      const [i, j] = indexes[idx];
      if (dfs(word, 0, board, i, j, [])) {
        result.push(word);
        break;
      }
    }
  }
  return result;
}

function dfs(
  word: string,
  pos: number,
  board: string[][],
  i: number,
  j: number,
  result: string[],
): boolean {
  if (result.length) {
    return false;
  }
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return false;
  }
  if (word[pos] !== board[i][j]) {
    return false;
  }
  if (pos === word.length - 1) {
    result.push(word);
    return true;
  }
  board[i][j] = board[i][j].toUpperCase();
  const right = dfs(word, pos + 1, board, i, j + 1, result);
  const down = dfs(word, pos + 1, board, i + 1, j, result);
  const left = dfs(word, pos + 1, board, i, j - 1, result);
  const up = dfs(word, pos + 1, board, i - 1, j, result);
  board[i][j] = board[i][j].toLocaleLowerCase();
  return right || down || left || up;
}
