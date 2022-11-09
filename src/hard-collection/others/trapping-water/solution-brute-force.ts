export function trap(height: number[]): number {
  let result = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    result += Math.min(leftMax, rightMax) - height[i];
  }
  return result;
}
