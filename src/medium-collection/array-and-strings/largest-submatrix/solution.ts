export function largestSubmatrix(matrix: number[][]): number {
  let maxArea = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  // Preprocess the matrix to calculate heights of consecutive ones
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If the cell is 1, add the value from the cell directly above
      if (matrix[i][j] === 1) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }
  }

  // Sort each row in non-increasing order
  for (let i = 0; i < m; i++) {
    matrix[i].sort((a, b) => b - a);

    // Calculate the maximum area for each position in the sorted row
    for (let j = 0; j < n; j++) {
      // The area is the height of the bar multiplied by its width
      // Width is determined by the position in the sorted row (j + 1)
      maxArea = Math.max(maxArea, matrix[i][j] * (j + 1));
    }
  }

  return maxArea;
}
