export function minIncrementForUnique(nums: number[]): number {
  const max = Math.max(...nums);
  const countArray = new Array(max + 1).fill(0);
  for (const num of nums) {
    countArray[num]++;
  }
  let nextAvailable = 0;
  let result = 0;
  for (let num = 0; num < countArray.length; num++) {
    while (countArray[num] > 1) {
      // Find the next available number
      nextAvailable = Math.max(nextAvailable, num);
      while (nextAvailable < max && countArray[nextAvailable] !== 0) {
        nextAvailable++;
      }
      if (nextAvailable >= max) {
        nextAvailable++;
      }
      // the number of moves is the diff between next and the current num
      result += nextAvailable - num;
      countArray[nextAvailable]++;
      countArray[num]--;
    }
  }

  return result;
}
