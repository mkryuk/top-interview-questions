export function largestRectangleArea(heights: number[]): number {
  let result = 0;
  const length = heights.length;
  for (let i = 0; i < length; i++) {
    let currentRect = heights[i];
    for (let j = i + 1; j < length && heights[j] >= heights[i]; j++) {
      currentRect += heights[i];
    }
    for (let j = i - 1; j >= 0 && heights[j] >= heights[i]; j--) {
      currentRect += heights[i];
    }
    result = Math.max(result, currentRect);
  }
  return result;
}
