export function spiralMatrixIII(
  rows: number,
  cols: number,
  rStart: number,
  cStart: number,
): number[][] {
  const result: number[][] = [];
  const totalCells = rows * cols;
  const directions = [
    [0, 1], // move right
    [1, 0], // move down
    [0, -1], // move left
    [-1, 0], // move up
  ];

  let currentRow = rStart;
  let currentCol = cStart;
  let steps = 1;
  let directionIndex = 0;

  result.push([currentRow, currentCol]);

  while (result.length < totalCells) {
    for (let i = 0; i < 2; i++) {
      for (let step = 0; step < steps; step++) {
        currentRow += directions[directionIndex][0];
        currentCol += directions[directionIndex][1];

        if (
          currentRow >= 0 &&
          currentRow < rows &&
          currentCol >= 0 &&
          currentCol < cols
        ) {
          result.push([currentRow, currentCol]);
        }
      }
      directionIndex = (directionIndex + 1) % 4;
    }
    steps++;
  }

  return result;
}
