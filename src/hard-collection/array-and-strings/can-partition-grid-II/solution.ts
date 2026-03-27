export function canPartitionGrid(grid: number[][]): boolean {
  const rows = grid.length;
  const cols = grid[0].length;
  const totalCounts = new Map<number, number>();
  let totalSum = 0;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const value = grid[row][col];
      totalSum += value;
      incrementCount(totalCounts, value);
    }
  }

  let topSum = 0;
  const topCounts = new Map<number, number>();
  const bottomCounts = new Map(totalCounts);

  for (let row = 0; row < rows - 1; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const value = grid[row][col];
      topSum += value;
      incrementCount(topCounts, value);
      decrementCount(bottomCounts, value);
    }

    const bottomSum = totalSum - topSum;

    if (topSum === bottomSum) {
      return true;
    }

    if (topSum > bottomSum) {
      if (canRemoveFromTop(grid, row, topSum - bottomSum, topCounts)) {
        return true;
      }
    } else {
      if (canRemoveFromBottom(grid, row, bottomSum - topSum, bottomCounts)) {
        return true;
      }
    }
  }

  let leftSum = 0;
  const leftCounts = new Map<number, number>();
  const rightCounts = new Map(totalCounts);

  for (let col = 0; col < cols - 1; col += 1) {
    for (let row = 0; row < rows; row += 1) {
      const value = grid[row][col];
      leftSum += value;
      incrementCount(leftCounts, value);
      decrementCount(rightCounts, value);
    }

    const rightSum = totalSum - leftSum;

    if (leftSum === rightSum) {
      return true;
    }

    if (leftSum > rightSum) {
      if (canRemoveFromLeft(grid, col, leftSum - rightSum, leftCounts)) {
        return true;
      }
    } else {
      if (canRemoveFromRight(grid, col, rightSum - leftSum, rightCounts)) {
        return true;
      }
    }
  }

  return false;
}

function incrementCount(counts: Map<number, number>, value: number): void {
  counts.set(value, (counts.get(value) ?? 0) + 1);
}

function decrementCount(counts: Map<number, number>, value: number): void {
  const nextCount = (counts.get(value) ?? 0) - 1;

  if (nextCount === 0) {
    counts.delete(value);
  } else {
    counts.set(value, nextCount);
  }
}

function canRemoveFromTop(
  grid: number[][],
  cutRow: number,
  difference: number,
  topCounts: Map<number, number>,
): boolean {
  const rows = cutRow + 1;
  const cols = grid[0].length;

  if (rows === 1 && cols === 1) {
    return false;
  }

  if (rows === 1) {
    return grid[0][0] === difference || grid[0][cols - 1] === difference;
  }

  if (cols === 1) {
    return grid[0][0] === difference || grid[cutRow][0] === difference;
  }

  return topCounts.has(difference);
}

function canRemoveFromBottom(
  grid: number[][],
  cutRow: number,
  difference: number,
  bottomCounts: Map<number, number>,
): boolean {
  const rows = grid.length - cutRow - 1;
  const cols = grid[0].length;

  if (rows === 1 && cols === 1) {
    return false;
  }

  if (rows === 1) {
    return grid[grid.length - 1][0] === difference || grid[grid.length - 1][cols - 1] === difference;
  }

  if (cols === 1) {
    return grid[cutRow + 1][0] === difference || grid[grid.length - 1][0] === difference;
  }

  return bottomCounts.has(difference);
}

function canRemoveFromLeft(
  grid: number[][],
  cutCol: number,
  difference: number,
  leftCounts: Map<number, number>,
): boolean {
  const rows = grid.length;
  const cols = cutCol + 1;

  if (rows === 1 && cols === 1) {
    return false;
  }

  if (rows === 1) {
    return grid[0][0] === difference || grid[0][cutCol] === difference;
  }

  if (cols === 1) {
    return grid[0][0] === difference || grid[rows - 1][0] === difference;
  }

  return leftCounts.has(difference);
}

function canRemoveFromRight(
  grid: number[][],
  cutCol: number,
  difference: number,
  rightCounts: Map<number, number>,
): boolean {
  const rows = grid.length;
  const cols = grid[0].length - cutCol - 1;

  if (rows === 1 && cols === 1) {
    return false;
  }

  if (rows === 1) {
    return grid[0][cutCol + 1] === difference || grid[0][grid[0].length - 1] === difference;
  }

  if (cols === 1) {
    return grid[0][grid[0].length - 1] === difference || grid[rows - 1][grid[0].length - 1] === difference;
  }

  return rightCounts.has(difference);
}
