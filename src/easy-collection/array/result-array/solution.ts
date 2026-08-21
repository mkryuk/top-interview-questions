export function resultArray(nums: number[]): number[] {
  const arr1: number[] = [nums[0]];
  const arr2: number[] = [nums[1]];

  for (let i = 2; i < nums.length; i++) {
    const last1 = arr1[arr1.length - 1];
    const last2 = arr2[arr2.length - 1];

    if (last1 > last2) {
      arr1.push(nums[i]);
    } else {
      arr2.push(nums[i]);
    }
  }

  return [...arr1, ...arr2];
}
