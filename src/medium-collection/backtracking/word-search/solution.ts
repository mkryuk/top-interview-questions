export function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(0, word, i, j, board, new Set<string>())) {
        return true;
      }
    }
  }
  return false;
}

function backtrack(
  index: number,
  word: string,
  i: number,
  j: number,
  board: string[][],
  parsed: Set<string>
): boolean {
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    parsed.has(`${i}${j}`)
  ) {
    return false;
  }
  if (word[index] === board[i][j]) {
    parsed.add(`${i}${j}`);
    if (index === word.length - 1) {
      return true;
    }
    const result =
      backtrack(index + 1, word, i + 1, j, board, parsed) ||
      backtrack(index + 1, word, i - 1, j, board, parsed) ||
      backtrack(index + 1, word, i, j + 1, board, parsed) ||
      backtrack(index + 1, word, i, j - 1, board, parsed);
    parsed.delete(`${i}${j}`);
    return result;
  }
  return false;
}
