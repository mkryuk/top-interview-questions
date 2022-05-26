export function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    result = Math.max(result, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
}
