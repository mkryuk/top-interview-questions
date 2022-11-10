export function trap(height: number[]): number {
  let result = 0;
  let leftMax = [];
  let rightMax = [];
  let size = height.length;
  // for each i find the highest height from the left
  leftMax[0] = height[0];
  for (let i = 1; i < size; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  // for each i find the highest height from the right
  rightMax[size - 1] = height[size - 1];
  for (let i = size - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  for (let i = 0; i < size; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return result;
}
