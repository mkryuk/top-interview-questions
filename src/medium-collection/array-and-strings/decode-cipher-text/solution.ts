export function decodeCiphertext(encodedText: string, rows: number): string {
  if (rows === 1) {
    return encodedText;
  }

  const totalLength = encodedText.length;
  const cols = totalLength / rows;
  const chars: string[] = [];

  for (let startCol = 0; startCol < cols; startCol++) {
    collectDiagonal(encodedText, rows, cols, startCol, chars);
  }

  return trimTrailingSpaces(chars.join(""));
}

function collectDiagonal(encodedText: string, rows: number, cols: number, startCol: number, chars: string[]): void {
  let row = 0;
  let col = startCol;

  while (row < rows && col < cols) {
    const index = row * cols + col;
    chars.push(encodedText[index]);
    row++;
    col++;
  }
}

function trimTrailingSpaces(text: string): string {
  let end = text.length - 1;

  while (end >= 0 && text[end] === " ") {
    end--;
  }

  return text.slice(0, end + 1);
}
