export function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const aStr = a.toString();
    const bStr = b.toString();
    return aStr + bStr < bStr + aStr ? 1 : -1;
  });
  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
}
