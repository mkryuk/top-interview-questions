import { rob } from "./solution-iterative-optimized";

it("rob should return 4 for nums = [1,2,3,1]", function () {
  const nums = [1, 2, 3, 1];
  const result = rob(nums);
  expect(result).toEqual(4);
});

it("rob should return 12 for nums = [2,7,9,3,1]", function () {
  const nums = [2, 7, 9, 3, 1];
  const result = rob(nums);
  expect(result).toEqual(12);
});

it("rob should return 12 for nums = [7,2,9,3,1]", function () {
  const nums = [7, 2, 3, 9, 1, 8];
  const result = rob(nums);
  expect(result).toEqual(24);
});

it("rob should return 16 for nums = [2,7,1,1,9]", function () {
  const nums = [2, 7, 1, 1, 9];
  const result = rob(nums);
  expect(result).toEqual(16);
});

it("rob should return 14 for nums = [2,7,1,1,9]", function () {
  const nums = [2, 7, 9, 7, 1];
  const result = rob(nums);
  expect(result).toEqual(14);
});

it("rob should return 11 for nums = [9,8,2,1]", function () {
  const nums = [9, 8, 2, 1];
  const result = rob(nums);
  expect(result).toEqual(11);
});

it("rob should return 1 for nums = [1]", function () {
  const nums = [1];
  const result = rob(nums);
  expect(result).toEqual(1);
});

it("rob should return 2 for nums = [1,2]", function () {
  const nums = [1, 2];
  const result = rob(nums);
  expect(result).toEqual(2);
});

it("rob should return 4 for nums = [2,3,2]", function () {
  const nums = [2, 3, 2];
  const result = rob(nums);
  expect(result).toEqual(4);
});
