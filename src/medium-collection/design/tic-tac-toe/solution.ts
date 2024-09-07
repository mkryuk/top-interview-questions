export class TicTacToe {
  board: number[][];
  playerCol: number[];
  playerRow: number[];
  playerDiagL: number;
  playerDiagR: number;
  constructor(n: number) {
    this.board = Array(n)
      .fill(0)
      .map(() => Array(n).fill(0));
    this.playerCol = new Array(n).fill(0);
    this.playerRow = new Array(n).fill(0);
    this.playerDiagL = 0;
    this.playerDiagR = 0;
  }

  move(row: number, col: number, player: number): number {
    if (this.board[row][col] !== 0) {
      return -1;
    }
    this.board[row][col] = player;
    if (this.checkWin(row, col, player)) {
      return player;
    }
    return 0;
  }

  checkWin(row: number, col: number, player: number): boolean {
    if ((!this.playerRow[row] || this.playerRow[row] === player) && this.checkRow(row, player)) {
      return true;
    }
    if ((!this.playerCol[col] || this.playerCol[col] === player) && this.checkCol(col, player)) {
      return true;
    }
    if (col === row && (!this.playerDiagL || this.playerDiagL === player) && this.checkDiagonalL(player)) {
      return true;
    }
    if (
      col + row === this.board.length - 1 &&
      (!this.playerDiagR || this.playerDiagR === player) &&
      this.checkDiagonalR(player)
    ) {
      return true;
    }

    return false;
  }
  checkRow(row: number, player: number): boolean {
    if (this.playerRow[row] === 0) {
      this.playerRow[row] = player;
    }
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[row][i] !== player) {
        if (this.board[row][i] !== 0) {
          this.playerRow[row] = -1;
        }
        return false;
      }
    }
    return true;
  }
  checkCol(col: number, player: number): boolean {
    if (this.playerCol[col] === 0) {
      this.playerCol[col] = player;
    }
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][col] !== player) {
        if (this.board[i][col] !== 0) {
          this.playerCol[col] = -1;
        }
        return false;
      }
    }
    return true;
  }

  checkDiagonalL(player: number): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][i] !== player) {
        if (this.board[i][i] === 0) {
          this.playerDiagL = player;
        } else {
          this.playerDiagL = -1;
        }
        return false;
      }
    }
    return true;
  }

  checkDiagonalR(player: number): boolean {
    for (let i = 0, j = this.board.length - 1; i < this.board.length; i++, j--) {
      if (this.board[i][j] !== player) {
        if (this.board[i][j] === 0) {
          this.playerDiagR = player;
        } else {
          this.playerDiagR = -1;
        }
        return false;
      }
    }
    return true;
  }
}
