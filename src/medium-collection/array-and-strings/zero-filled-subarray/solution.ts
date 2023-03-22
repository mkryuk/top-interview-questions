export function zeroFilledSubarray(nums: number[]): number {
  let result = 0;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      result += getGroupCount(zeroCount);
      zeroCount = 0;
    }
  }
  if (zeroCount !== 0) {
    result += getGroupCount(zeroCount);
  }
  return result;
}

function getGroupCount(num: number): number {
  let result = 0;
  while (num !== 0) {
    result += num--;
  }
  return result;
}
