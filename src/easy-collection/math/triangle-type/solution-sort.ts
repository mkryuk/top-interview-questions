export function triangleType(nums: number[]): string {
  const [a, b, c] = nums.sort((a, b) => a - b);
  if (a + b <= c) {
    return "none";
  } else if (a === c) {
    return "equilateral";
  } else if (a === b || b === c) {
    return "isosceles";
  }
  return "scalene";
}
