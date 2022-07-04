/**
 Do not return anything, modify board in-place instead.
 */
export function solve(board: string[][]): void {
  let m = board.length;
  let n = board[0].length;
  let mark = "M";
  // we just pass over the edges
  // and mark all connected nodes
  for (let i = 0; i < m; i++) {
    markNode(i, 0, board, mark);
    markNode(i, n - 1, board, mark);
  }
  for (let i = 0; i < n; i++) {
    markNode(0, i, board, mark);
    markNode(m - 1, i, board, mark);
  }
  // then pass over the matrix
  // and set all marked nodes to 'O'
  // and not marked nodes to 'X'
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === mark) {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }
}

function markNode(i: number, j: number, board: string[][], mark: string) {
  let m = board.length;
  let n = board[0].length;
  if (i < 0 || j < 0 || i > m - 1 || j > n - 1) {
    return;
  }
  if (board[i][j] === "O") {
    board[i][j] = mark;
    markNode(i - 1, j, board, mark);
    markNode(i + 1, j, board, mark);
    markNode(i, j - 1, board, mark);
    markNode(i, j + 1, board, mark);
  }
}
