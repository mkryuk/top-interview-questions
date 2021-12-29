import { threeSum } from "./solution";

it("threeSum should return [[-1,-1,2],[-1,0,1]] for nums = [-1,0,1,2,-1,-4]", function () {
  const nums = [-1, 0, 1, 2, -1, -4];
  const result = threeSum(nums);
  expect(result).toEqual([
    [-1, 0, 1],
    [-1, -1, 2],
  ]);
});

it("threeSum should return [] for nums = []", function () {
  const nums: number[] = [];
  const result = threeSum(nums);
  expect(result).toEqual([]);
});

it("threeSum should return [] for nums = [0]", function () {
  const nums = [0];
  const result = threeSum(nums);
  expect(result).toEqual([]);
});
