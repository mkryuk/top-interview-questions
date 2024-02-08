export function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);
  let first = nums.indexOf(target);
  let last = nums.lastIndexOf(target);
  let result: number[] = [];
  if (first === -1) {
    return [];
  }
  for (let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
}
