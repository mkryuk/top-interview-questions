export function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [-1];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
      const currentHeight = heights[stack.pop()!];
      const currentWidth = i - stack[stack.length - 1] - 1;
      const currentArea = currentHeight * currentWidth;
      maxArea = Math.max(maxArea, currentArea);
    }
    stack.push(i);
  }

  while (stack[stack.length - 1] !== -1) {
    const currentHeight = heights[stack.pop()!];
    const currentWidth = heights.length - stack[stack.length - 1] - 1;
    const currentArea = currentHeight * currentWidth;
    maxArea = Math.max(maxArea, currentArea);
  }
  return maxArea;
}
