export function pivotArray(nums: number[], pivot: number): number[] {
  const n = nums.length;
  const left = new Array();
  const middle = new Array();
  const right = new Array();
  for (let i = 0; i < n; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else if (nums[i] === pivot) {
      middle.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...left, ...middle, ...right];
}
