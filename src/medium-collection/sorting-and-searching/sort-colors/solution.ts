/**
 Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]): void {
  const colorCounts = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    const color = nums[i];
    const index = getIndex(color, colorCounts);
    move(i, index, nums);
    colorCounts[color]++;
  }
}

function getIndex(color: number, colorCounts: number[]) {
  let result = 0;
  for (let i = 0; i <= color; i++) {
    result += colorCounts[i];
  }
  return result;
}

function move(from: number, to: number, nums: number[]) {
  if (from === to) {
    return;
  }
  var element = nums[from];
  nums.splice(from, 1);
  nums.splice(to, 0, element);
}
