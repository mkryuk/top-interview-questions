export function isValidSudoku(board: string[][]): boolean {
  for (let index = 0; index < board.length; index++) {
    if (!checkRow(board, index) || !checkColumn(board, index)) {
      return false;
    }
  }
  for (let i = 0; i < board.length; i += 3) {
    for (let k = 0; k < board.length; k += 3) {
      if (!checkBox(board, i, k)) {
        return false;
      }
    }
  }
  return true;
}

function checkRow(board: string[][], rowIndex: number): boolean {
  let rowSet = new Set<string>();
  for (let index = 0; index < board.length; index++) {
    const element = board[rowIndex][index];
    if (element === ".") {
      continue;
    }
    if (rowSet.has(element)) {
      return false;
    }
    rowSet.add(element);
  }
  return true;
}

function checkColumn(board: string[][], columnIndex: number): boolean {
  let columnSet = new Set<string>();
  for (let index = 0; index < board.length; index++) {
    const element = board[index][columnIndex];
    if (element === ".") {
      continue;
    }
    if (columnSet.has(element)) {
      return false;
    }
    columnSet.add(element);
  }
  return true;
}

function checkBox(board: string[][], left: number, top: number): boolean {
  let boxSet = new Set<string>();
  for (let i = top; i < top + 3; i++) {
    for (let k = left; k < left + 3; k++) {
      const element = board[i][k];
      if (element === ".") {
        continue;
      }
      if (boxSet.has(element)) {
        return false;
      }
      boxSet.add(element);
    }
  }
  return true;
}
