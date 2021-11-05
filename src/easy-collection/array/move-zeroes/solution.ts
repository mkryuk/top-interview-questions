/**
 Do not return anything, modify nums in-place instead.
 */

// bubble swap
// export function moveZeroes(nums: number[]): void {
//   let swapped = true;
//   while (swapped) {
//     swapped = false;
//     for (let index = 0; index < nums.length - 1; index++) {
//       if (nums[index] === 0 && nums[index + 1] !== 0) {
//         const temp = nums[index];
//         nums[index] = nums[index + 1];
//         nums[index + 1] = temp;
//         swapped = true;
//       }
//     }
//   }
// }

// tricky move
// we move every non zero item to it's place in the array
// then fill the rest with the zeros
// export function moveZeroes(nums: number[]): void {
//   let nonZeroIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[nonZeroIndex++] = nums[i];
//     }
//   }
//   for (let i = nonZeroIndex; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// }

// two index swap
// we swap every next non zero item with zero item
export function moveZeroes(nums: number[]): void {
  for (let i = 0, nonZeroIndex = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // for not to swap with itself
      if (i !== nonZeroIndex) {
        const temp = nums[i];
        nums[i] = nums[nonZeroIndex];
        nums[nonZeroIndex] = temp;
      }
      nonZeroIndex++;
    }
  }
}
