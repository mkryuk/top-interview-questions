export function maximalRectangle(matrix: string[][]): number {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const heights = Array(cols).fill(0);
  let maxArea = 0;

  // Build histogram for each row and find the maximum area of the rectangle
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }

  return maxArea;
}

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = []; // Create an empty stack to store indices of heights.
  let maxArea = 0; // Initialize maxArea to store the maximum area found.
  heights.push(0); // Append a sentinel value to ensure all items are popped from the stack.

  for (let i = 0; i < heights.length; i++) {
    // Iterate through each bar in the histogram.
    // While the current bar is shorter than the bar at the top of the stack, calculate area.
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const h = heights[stack.pop()!]; // Pop the top of the stack and use it as the height of the rectangle.
      // Compute the width of the rectangle: from the current index back to the previous item in the stack.
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w); // Calculate the area and update maxArea if it's larger.
    }
    stack.push(i); // Push the current index onto the stack.
  }

  heights.pop(); // Remove the sentinel value to restore the original heights array.
  return maxArea; // Return the maximum area found.
}
