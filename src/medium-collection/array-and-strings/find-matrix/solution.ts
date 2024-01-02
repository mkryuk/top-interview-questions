export function findMatrix(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let result: number[][] = [[nums[0]]];
  let rowIndex = 0;
  let row: number[];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      if (rowIndex + 1 === result.length) {
        result.push([]);
      }
      row = result[++rowIndex];
    } else {
      rowIndex = 0;
      row = result[rowIndex];
    }
    row.push(nums[i]);
  }
  return result;
}
