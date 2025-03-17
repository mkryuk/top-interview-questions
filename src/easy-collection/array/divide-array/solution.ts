export function divideArray(nums: number[]): boolean {
  const max = Math.max(...nums);
  const hasPair = new Array(max + 1).fill(true);
  for (const num of nums) {
    hasPair[num] = !hasPair[num];
  }
  for (let i = 0; i < max; i++) {
    if (hasPair[i] === false) {
      return false;
    }
  }
  return true;
}
