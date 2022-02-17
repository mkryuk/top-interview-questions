import { searchRange } from "./solution";

it("searchRange should return [3,4] for nums = [5,7,7,8,8,10], target = 8", () => {
  const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([3, 4]);
});

it("searchRange should return [-1,-1] for nums = [5,7,7,8,8,10], target = 6", () => {
  const nums = [5, 7, 7, 8, 8, 10],
    target = 6;
  const result = searchRange(nums, target);
  expect(result).toEqual([-1, -1]);
});

it("searchRange should return [-1,-1] for nums = [], target = 0", () => {
  const nums: number[] = [],
    target = 0;
  const result = searchRange(nums, target);
  expect(result).toEqual([-1, -1]);
});
