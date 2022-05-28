export function gameOfLife(board: number[][]): void {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      checkCell(i, j, board);
    }
  }
  // we should pass through new board
  // mark as live all 2s and 1s
  // mark as dead all 0s and -1s
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] > 0) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
}

function checkCell(i: number, j: number, board: number[][]) {
  let neighbors = 0;
  for (let n = i - 1; n <= i + 1; n++) {
    for (let m = j - 1; m <= j + 1; m++) {
      // skip checking out of borders ot current cell
      if (
        n < 0 ||
        n >= board.length ||
        (n === i && m === j) ||
        m < 0 ||
        m >= board[0].length
      ) {
        continue;
      }
      if (Math.abs(board[n][m]) === 1) {
        neighbors++;
      }
    }
  }
  // we mark cell that should become live as 2
  // we mark cell that should die as -1
  if (board[i][j] === 0 && neighbors === 3) {
    board[i][j] = 2;
  } else if (board[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
    board[i][j] = -1;
  }
}
