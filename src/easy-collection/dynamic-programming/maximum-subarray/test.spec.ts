import { maxSubArray } from "./solution";

it("maxSubArray should return 6 for nums = [-2,1,-3,4,-1,2,1,-5,4]", function () {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const result = maxSubArray(nums);
  expect(result).toEqual(6);
});

it("maxSubArray should return 1 for nums = [1]", function () {
  const nums = [1];
  const result = maxSubArray(nums);
  expect(result).toEqual(1);
});

it("maxSubArray should return 23 for nums = [5,4,-1,7,8]", function () {
  const nums = [5, 4, -1, 7, 8];
  const result = maxSubArray(nums);
  expect(result).toEqual(23);
});

it("maxSubArray should return 7 for nums = [-2,1,-3,4,-1,2,1,-5,6]", function () {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 6];
  const result = maxSubArray(nums);
  expect(result).toEqual(7);
});

it("maxSubArray should return 7 for nums = [2,1,-3,4,-1,2,1,-5,6]", function () {
  const nums = [2, 1, -3, 4, -1, 2, 1, -5, 6];
  const result = maxSubArray(nums);
  expect(result).toEqual(6);
});
