export function longestIncreasingPath(matrix: number[][]): number {
  let result = 1;
  const pathMatrix: number[][] = new Array(matrix.length);
  for (let i = 0; i < matrix.length; i++) {
    pathMatrix[i] = new Array(matrix[0].length);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let stack = [[i, j]];
      while (stack.length) {
        // take the last element from the stack
        const [row, col] = stack[stack.length - 1];
        if (pathMatrix[row][col] !== undefined) {
          stack.pop();
          continue;
        }
        let path = 1;
        const directions = [
          [0, 1],
          [1, 0],
          [0, -1],
          [-1, 0],
        ];

        const stackLength = stack.length;
        directions.forEach(([rowShift, colShift]) => {
          const x = row + rowShift;
          const y = col + colShift;
          const inBoundaries = 0 <= x && x < matrix.length && 0 <= y && y < matrix[0].length;
          // if we are out of boundaries or next node is not greater than current node
          if (!inBoundaries || matrix[x][y] <= matrix[row][col]) {
            return;
          }
          // if we have cached next node path, we can add it to our path
          if (pathMatrix[x][y] !== undefined) {
            path = Math.max(path, 1 + pathMatrix[x][y]);
            return;
          }
          // otherwise, we push next node to stack
          stack.push([x, y]);
        });

        // if we pushed any new node to stack
        // we should check its path first
        if (stackLength !== stack.length) {
          continue;
        }

        pathMatrix[row][col] = path;
        result = Math.max(result, path);
        stack.pop();
      }
    }
  }
  return result;
}
