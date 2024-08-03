export function minSwaps(nums: number[]): number {
  const n = nums.length;
  const numOnes = nums.reduce((acc, num) => acc + num, 0);

  // special case: If there are no ones or all are ones, return 0
  if (numOnes === 0 || numOnes === n) {
    return 0;
  }

  // double the array to simulate circular behavior
  const extendedNums = nums.concat(nums);

  // initialize window with the number of zeros in the first window
  let currentZeros = 0;
  for (let i = 0; i < numOnes; i++) {
    if (extendedNums[i] === 0) {
      currentZeros++;
    }
  }

  // minimum swaps is initially the zeros in the first window
  let minSwaps = currentZeros;

  // slide the window over the extended array
  for (let i = numOnes; i < n + numOnes; i++) {
    // slide the window to the right
    if (extendedNums[i] === 0) {
      currentZeros++;
    }
    if (extendedNums[i - numOnes] === 0) {
      currentZeros--;
    }
    // update minimum swaps
    minSwaps = Math.min(minSwaps, currentZeros);
  }

  return minSwaps;
}
