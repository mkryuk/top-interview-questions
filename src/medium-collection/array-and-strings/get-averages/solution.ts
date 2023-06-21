export function getAverages(nums: number[], k: number): number[] {
  let result = new Array(nums.length).fill(-1);
  if (nums.length < k * 2 + 1) {
    return result;
  }
  const subLen = k * 2 + 1;
  var sum = 0;
  for (let i = 0; i < subLen; i++) {
    sum += nums[i];
  }
  result[k] = Math.trunc(sum / subLen);
  for (let i = k + 1; i < nums.length - k; i++) {
    sum -= nums[i - k - 1];
    sum += nums[i + k];
    result[i] = Math.trunc(sum / subLen);
  }
  return result;
}
