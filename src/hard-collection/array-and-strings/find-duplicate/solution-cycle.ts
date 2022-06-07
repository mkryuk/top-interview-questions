export function findDuplicate(nums: number[]): number {
  let tortoise = nums[0];
  let hare = nums[0];
  // Find the meeting point
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  // Find the entrance to the cycle
  // by moving the tortoise to the beginning
  // and slowing down the hare twice
  // the intersection of the two pointers
  // will be the entrance to the cycle
  tortoise = nums[0];
  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }
  return tortoise;
}
