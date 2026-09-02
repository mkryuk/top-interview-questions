export function minMoves(classroom: string[], energy: number): number {
  const rows = classroom.length;
  const cols = classroom[0].length;
  let startRow = 0;
  let startCol = 0;
  let litterCount = 0;
  const litterIndex: number[][] = Array.from({ length: rows }, () => Array(cols).fill(-1));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = classroom[row][col];
      if (cell === "S") {
        startRow = row;
        startCol = col;
      }

      if (cell === "L") {
        litterIndex[row][col] = litterCount;
        litterCount++;
      }
    }
  }

  const targetMask = (1 << litterCount) - 1;
  if (targetMask === 0) {
    return 0;
  }

  // for each position and mask, store the maximum energy
  // we've had when reaching this state.
  // if we reach the same position + mask with less or equal energy,
  // that state is dominated and does not need to be explored.
  const bestEnergy = new Int16Array(rows * cols * (1 << litterCount));
  bestEnergy.fill(-1);

  interface State {
    row: number;
    col: number;
    mask: number;
    remainingEnergy: number;
    moves: number;
  }

  const queue: State[] = [];
  let head = 0;
  function getStateIndex(row: number, col: number, mask: number): number {
    return (row * cols + col) * (1 << litterCount) + mask;
  }

  const startIndex = getStateIndex(startRow, startCol, 0);
  bestEnergy[startIndex] = energy;
  queue.push({
    row: startRow,
    col: startCol,
    mask: 0,
    remainingEnergy: energy,
    moves: 0,
  });

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (head < queue.length) {
    const current = queue[head++];
    if (current.mask === targetMask) {
      return current.moves;
    }

    // with zero energy, movement is impossible.
    // reset cells are already restored when entered.
    if (current.remainingEnergy === 0) {
      continue;
    }

    for (const [dr, dc] of directions) {
      const nextRow = current.row + dr;
      const nextCol = current.col + dc;
      if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) {
        continue;
      }

      if (classroom[nextRow][nextCol] === "X") {
        continue;
      }

      let nextEnergy = current.remainingEnergy - 1;
      let nextMask = current.mask;
      const cell = classroom[nextRow][nextCol];

      // collect litter
      if (cell === "L") {
        const index = litterIndex[nextRow][nextCol];
        nextMask |= 1 << index;
      }

      // entering a reset area restores full energy
      if (cell === "R") {
        nextEnergy = energy;
      }

      if (nextMask === targetMask) {
        return current.moves + 1;
      }

      const stateIndex = getStateIndex(nextRow, nextCol, nextMask);
      // this state is already reachable with at least as much energy
      if (bestEnergy[stateIndex] >= nextEnergy) {
        continue;
      }

      bestEnergy[stateIndex] = nextEnergy;

      queue.push({
        row: nextRow,
        col: nextCol,
        mask: nextMask,
        remainingEnergy: nextEnergy,
        moves: current.moves + 1,
      });
    }
  }

  return -1;
}
