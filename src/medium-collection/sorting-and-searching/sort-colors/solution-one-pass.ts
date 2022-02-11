export function sortColors(nums: number[]): void {
  let zeroIndex = 0,
    currIndex = 0,
    twoIndex = nums.length - 1;
  while (currIndex <= twoIndex) {
    if (nums[currIndex] === 0) {
      swap(currIndex++, zeroIndex++, nums);
    } else if (nums[currIndex] === 1) {
      currIndex++;
    } else {
      swap(currIndex, twoIndex--, nums);
    }
  }
}

function swap(from: number, to: number, nums: number[]) {
  if (from === to) {
    return;
  }
  const temp = nums[from];
  nums[from] = nums[to];
  nums[to] = temp;
}
