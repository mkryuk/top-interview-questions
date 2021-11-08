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
  let rowMap = new Map<string, number>();
  for (let index = 0; index < board.length; index++) {
    const element = board[rowIndex][index];
    if (element === ".") {
      continue;
    }
    if (rowMap.has(element)) {
      return false;
    }
    rowMap.set(element, 0);
  }
  return true;
}

function checkColumn(board: string[][], columnIndex: number): boolean {
  let columnMap = new Map<string, number>();
  for (let index = 0; index < board.length; index++) {
    const element = board[index][columnIndex];
    if (element === ".") {
      continue;
    }
    if (columnMap.has(element)) {
      return false;
    }
    columnMap.set(element, 0);
  }
  return true;
}

function checkBox(board: string[][], left: number, top: number): boolean {
  let boxMap = new Map<string, number>();
  for (let i = top; i < top + 3; i++) {
    for (let k = left; k < left + 3; k++) {
      const element = board[i][k];
      if (element === ".") {
        continue;
      }
      if (boxMap.has(element)) {
        return false;
      }
      boxMap.set(element, 0);
    }
  }
  return true;
}
