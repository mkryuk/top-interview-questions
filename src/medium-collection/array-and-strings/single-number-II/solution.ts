export function singleNumber(nums: number[]): number {
  let ones = 0;
  let twos = 0;
  // The idea is to count the number of 1s in each position
  // of the binary representation of numbers in the array.
  // If the number of 1s is not a multiple of 3,
  // it means that the single number has a 1 in that position.
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  // In the solution, ones is a variable that keeps track of bits which have been encountered one time so far,
  // and twos is a variable that keeps track of bits which have been encountered two times so far.
  // When a bit has been encountered three times, it will be present in both ones and twos.
  // Therefore, we mask ones and twos with ~twos and ~ones respectively.
  return ones;
}
