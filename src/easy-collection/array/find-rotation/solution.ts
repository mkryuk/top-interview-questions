export function findRotation(mat: number[][], target: number[][]): boolean {
  let current: number[][] = mat;
  for (let i = 0; i < 4; i++) {
    if (areEqual(current, target)) {
      return true;
    }

    current = rotate90(current);
  }
  return false;
}

function rotate90(matrix: number[][]): number[][] {
  const n: number = matrix.length;
  const rotated: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      rotated[col][n - 1 - row] = matrix[row][col];
    }
  }
  return rotated;
}

function areEqual(a: number[][], b: number[][]): boolean {
  const n: number = a.length;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (a[row][col] !== b[row][col]) {
        return false;
      }
    }
  }
  return true;
}
