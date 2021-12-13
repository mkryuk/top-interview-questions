export function rob(nums: number[]): number {
  let N = nums.length;
  let nextNext = 0;
  let next = nums[N - 1];
  // if there is only one house we take it
  let result = next;
  // if there are more we start from the end
  for (let i = N - 2; i >= 0; i--) {
    // we choose to take next or current with the nextNext
    result = Math.max(next, nextNext + nums[i]);
    // move one step back
    nextNext = next;
    next = result;
  }
  return result;
}
