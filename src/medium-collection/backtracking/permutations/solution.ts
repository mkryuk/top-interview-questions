export function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [nums];
  }
  const result: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    const tempNums = nums.filter((v, idx) => i !== idx);
    const tempResult = permute(tempNums);
    for (let j = 0; j < tempResult.length; j++) {
      const row = [item, ...tempResult[j]];
      result.push(row);
    }
  }
  return result;
}
