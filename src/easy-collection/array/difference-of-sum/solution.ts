export function differenceOfSum(nums: number[]): number {
  let elementSum = 0;
  let digitSum = 0;
  for (let i = 0; i < nums.length; i++) {
    digitSum += getDIgitSum(nums[i]);
    elementSum += nums[i];
  }
  return Math.abs(digitSum - elementSum);
}

function getDIgitSum(number: number): number {
  let result = 0;
  while (number > 0) {
    result += number % 10;
    number = Math.trunc(number / 10);
  }
  return result;
}
