export function sortColors(nums: number[]): void {
  const colorCount = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    const color = nums[i];
    colorCount[color]++;
  }
  let index = 0;
  for (let i = 0; i < colorCount.length; i++) {
    for (let k = 0; k < colorCount[i]; k++) {
      nums[index++] = i;
    }
  }
}
