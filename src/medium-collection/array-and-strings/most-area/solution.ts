export function maxArea(height: number[]): number {
  // handle minimal input defensively
  if (height.length < 2) {
    return 0;
  }

  let left: number = 0;
  let right: number = height.length - 1;
  let best: number = 0;

  while (left < right) {
    // compute current area
    const width: number = right - left;
    const h: number = Math.min(height[left], height[right]);
    const area: number = width * h;

    if (area > best) {
      best = area;
    }

    // move the pointer at the shorter side inward to try finding a taller line
    if (height[left] <= height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return best;
}
