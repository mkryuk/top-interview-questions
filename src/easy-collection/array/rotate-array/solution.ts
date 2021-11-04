/**
 Do not return anything, modify nums in-place instead.
 */

// export function rotate(nums: number[], k: number): void {
//   for (let index = 0; index < k; index++) {
//     const pop = nums.pop();
//     nums.unshift(pop as number);
//   }
// }

// export function rotate(nums: number[], k: number): void {
//   for (let index = 0; index < k; index++) {
//     const last = nums[nums.length - 1];
//     for (let index = nums.length - 1; index > 0; index--) {
//       nums[index] = nums[index - 1];
//     }
//     nums[0] = last;
//   }
// }

export function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
}
