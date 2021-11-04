// Sort solution
// export function singleNumber(nums: number[]): number {
//   nums.sort();
//   for (let index = 0; index < nums.length; index += 2) {
//     if (nums[index] !== nums[index + 1]) {
//       return nums[index];
//     }
//   }
//   return nums[0];
// }

// XOR solution
// export function singleNumber(nums: number[]): number {
//   let num = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     num = num ^ nums[i];
//   }
//   return num;
// }

// XOR one-liner
export function singleNumber(nums: number[]): number {
  return nums.reduce((a, b) => a ^ b);
}
