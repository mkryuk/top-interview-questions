export function exist(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (backtrack(0, word, i, j, board)) {
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
  board: string[][]
): boolean {
  if (index >= word.length) {
    return true;
  }
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[0].length ||
    word[index] !== board[i][j]
  ) {
    return false;
  }
  board[i][j] = "#";

  const rowOffset = [0, 1, 0, -1];
  const colOffset = [1, 0, -1, 0];
  for (let k = 0; k < rowOffset.length; k++) {
    if (backtrack(index + 1, word, i + rowOffset[k], j + colOffset[k], board)) {
      // if we need to restore previous value in the board
      // board[i][j] = word[index];
      return true;
    }
  }
  board[i][j] = word[index];
  return false;
}
