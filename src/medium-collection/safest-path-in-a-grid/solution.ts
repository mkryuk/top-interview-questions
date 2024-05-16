import { Heap } from "../../hard-collection/design/heap/heap";

type Grid = number[][];
type Position = [number, number];

const directions: number[][] = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function isValidCell(grid: number[][], i: number, j: number): boolean {
  const n = grid.length;
  return i >= 0 && j >= 0 && i < n && j < n;
}

function calculateSafenessFactors(grid: Grid): number[][] {
  const n = grid.length;
  const safeness = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const queue: Position[] = [];
  let queueStart = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
        safeness[i][j] = 0;
      }
    }
  }

  while (queueStart < queue.length) {
    const [currI, currJ] = queue[queueStart++];
    for (const [di, dj] of directions) {
      const ni = currI + di;
      const nj = currJ + dj;
      if (isValidCell(grid, ni, nj) && safeness[ni][nj] === Infinity) {
        safeness[ni][nj] = safeness[currI][currJ] + 1;
        queue.push([ni, nj]);
      }
    }
  }

  return safeness;
}

export function maximumSafenessFactor(grid: Grid): number {
  const n = grid.length;
  const safeness = calculateSafenessFactors(grid);
  const heap = new Heap<[number, number, number]>((a, b) => b[2] - a[2]);
  heap.push([0, 0, safeness[0][0]]);
  const seen: Set<number> = new Set([0]);
  let min: number = Infinity;

  while (!heap.isEmpty()) {
    const [row, cell, distance] = heap.pop()!;
    min = Math.min(min, distance);

    if (row === n - 1 && cell === n - 1) {
      return min;
    }

    for (const [offsetR, offsetC] of directions) {
      const newRow = row + offsetR;
      const newCell = cell + offsetC;

      if (isValidCell(grid, newRow, newCell)) {
        const index = newRow * n + newCell;

        if (!seen.has(index)) {
          seen.add(index);
          heap.push([newRow, newCell, safeness[newRow][newCell]]);
        }
      }
    }
  }

  return 0;
}
