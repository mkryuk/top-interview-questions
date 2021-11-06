// export function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     const firstNum = nums[i];
//     const secondIndex = nums.indexOf(target - firstNum, i + 1);
//     if (secondIndex !== -1) {
//       return [i, secondIndex];
//     }
//   }
//   return [];
// }

export function twoSum(nums: number[], target: number): number[] {
  const targetMap = new Map();
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (targetMap.has(nums[i])) {
      return [targetMap.get(nums[i]), i];
    }
    // we set the element that we are looking for but store the current index
    // so when we find that element we know the indexes for both elements for the target
    targetMap.set(target - nums[i], i);
  }
  return [];
}
