export function productExceptSelf(nums: number[]): number[] {
  let result = [1];
  // calculate product of all numbers to the left of i
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }
  // calculate product of all numbers to the right of i
  // and multiply it with the result of the left side
  let product = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
}
