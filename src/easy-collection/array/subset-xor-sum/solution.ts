export function subsetXORSum(nums: number[]): number {
  let result = 0;
  const n = nums.length;
  function dfs(index: number, currentXOR: number) {
    if (index === n) {
      result += currentXOR;
      return;
    }
    // Include nums[index] in the subset
    dfs(index + 1, currentXOR ^ nums[index]);
    // Exclude nums[index] from the subset
    dfs(index + 1, currentXOR);
  }
  dfs(0, 0);
  return result;
}
