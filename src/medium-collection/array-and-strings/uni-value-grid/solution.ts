export function minOperations(grid: number[][], x: number): number {
  const nums = new Array();
  let remainder = grid[0][0] % x;
  // flatten array
  // check if it is possible to make the grid uni-value.
  // all numbers must have the same remainder modulo x.
  for (const row of grid) {
    for (const num of row) {
      if (num % x !== remainder) {
        return -1;
      }
      nums.push(num);
    }
  }

  nums.sort((a, b) => a - b);
  // median is the target to minimize the total number of operations.
  const mid = Math.floor(nums.length / 2);
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += Math.abs(nums[i] - nums[mid]) / x;
  }

  return result;
}
