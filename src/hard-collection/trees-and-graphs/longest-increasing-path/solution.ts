export function longestIncreasingPath(matrix: number[][]): number {
  let result = 1;
  const pathMatrix: number[][] = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    pathMatrix[i] = new Array(matrix[0].length);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result = Math.max(result, getNodePath(i, j, matrix, pathMatrix));
    }
  }

  return result;
}

function getNodePath(i: number, j: number, matrix: number[][], pathMatrix: number[][]): number {
  if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) {
    return 0;
  }
  if (pathMatrix[i][j] !== undefined) {
    return pathMatrix[i][j];
  }
  let path = 1;
  const canGoRight = j < matrix[0].length - 1;
  const canGoLeft = j > 0;
  const canGoDown = i < matrix.length - 1;
  const canGoUp = i > 0;
  if (canGoRight && matrix[i][j + 1] > matrix[i][j]) {
    path = Math.max(path, 1 + getNodePath(i, j + 1, matrix, pathMatrix));
  }
  if (canGoDown && matrix[i + 1][j] > matrix[i][j]) {
    path = Math.max(path, 1 + getNodePath(i + 1, j, matrix, pathMatrix));
  }
  if (canGoLeft && matrix[i][j - 1] > matrix[i][j]) {
    path = Math.max(path, 1 + getNodePath(i, j - 1, matrix, pathMatrix));
  }
  if (canGoUp && matrix[i - 1][j] > matrix[i][j]) {
    path = Math.max(path, 1 + getNodePath(i - 1, j, matrix, pathMatrix));
  }
  pathMatrix[i][j] = path;
  return path;
}
