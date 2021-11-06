import { twoSum } from "./solution";

it("twoSum should return [0,1] for nums = [2,7,11,15], target = 9", () => {
  const nums = [2, 7, 11, 15],
    target = 9;
  const result = twoSum(nums, target);
  expect(result).toEqual([0, 1]);
});

it("twoSum should return [1,2] for nums = [3,2,4], target = 6", () => {
  const nums = [3, 2, 4],
    target = 6;
  const result = twoSum(nums, target);
  expect(result).toEqual([1, 2]);
});

it("twoSum should return [0,1] for nums = [3,3], target = 6", () => {
  const nums = [3, 3],
    target = 6;
  const result = twoSum(nums, target);
  expect(result).toEqual([0, 1]);
});

it("twoSum should return [0,3] for nums = [0,4,3,0], target = 0", () => {
  const nums = [0, 4, 3, 0],
    target = 0;
  const result = twoSum(nums, target);
  expect(result).toEqual([0, 3]);
});

it("twoSum should return [0,1] for nums = [0,4,3,0], target = 4", () => {
  const nums = [0, 4, 3, 0],
    target = 4;
  const result = twoSum(nums, target);
  expect(result).toEqual([0, 1]);
});

it("twoSum should return [2,4] for nums = [-1,-2,-3,-4,-5], target = -8", () => {
  const nums = [-1, -2, -3, -4, -5],
    target = -8;
  const result = twoSum(nums, target);
  expect(result).toEqual([2, 4]);
});
