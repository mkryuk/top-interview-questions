export function uniformArray(nums1: number[]): boolean {
  let minValue = Infinity;
  let allEven = true;

  for (const num of nums1) {
    minValue = Math.min(minValue, num);
    if (num % 2 !== 0) {
      allEven = false;
    }
  }

  if (allEven) {
    return true;
  }

  return minValue % 2 !== 0;
}
