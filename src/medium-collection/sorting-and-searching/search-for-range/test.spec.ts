import { searchRange } from "./solution";

it("searchRange should return [3,4] for nums = [5,7,7,8,8,10], target = 8", () => {
  const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([3, 4]);
});

it("searchRange should return [2,4] for nums = [5,7,7,8,8,8,10], target = 8", () => {
  const nums = [5, 7, 8, 8, 8, 10],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([2, 4]);
});

it("searchRange should return [2,5] for nums = [5,7,7,8,8,8,8,10], target = 8", () => {
  const nums = [5, 7, 8, 8, 8, 8, 10],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([2, 5]);
});

it("searchRange should return [0,0] for nums = [8], target = 8", () => {
  const nums = [8],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([0, 0]);
});

it("searchRange should return [0,1] for nums = [8,8], target = 8", () => {
  const nums = [8, 8],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([0, 1]);
});

it("searchRange should return [0,2] for nums = [8,8,8], target = 8", () => {
  const nums = [8, 8, 8],
    target = 8;
  const result = searchRange(nums, target);
  expect(result).toEqual([0, 2]);
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
