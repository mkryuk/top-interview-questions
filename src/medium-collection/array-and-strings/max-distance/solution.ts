export function maxDistance(position: number[], m: number): number {
  const n = position.length;
  position.sort((a, b) => a - b);
  let left = 1;
  let right = position[n - 1] - position[0];
  let result = 0;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canPlaceBalls(mid, position, m)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function canPlaceBalls(force: number, position: number[], m: number): boolean {
  let lastPosition = position[0];
  let count = 1;
  for (let i = 1; i < position.length; i++) {
    const diff = position[i] - lastPosition;
    if (diff >= force) {
      lastPosition = position[i];
      count++;
    }
    if (count >= m) {
      return true;
    }
  }
  return false;
}
