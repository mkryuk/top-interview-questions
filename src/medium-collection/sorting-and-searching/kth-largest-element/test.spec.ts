import { findKthLargest } from "./solution";

it("findKthLargest should return 5 for nums = [3,2,1,5,6,4], k = 2", () => {
  const nums = [3, 2, 1, 5, 6, 4],
    k = 2;
  const result = findKthLargest(nums, k);
  expect(result).toEqual(5);
});

it("findKthLargest should return 4 for nums = [3,2,3,1,2,4,5,5,6], k = 4", () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
    k = 4;
  const result = findKthLargest(nums, k);
  expect(result).toEqual(4);
});
