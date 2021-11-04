import { singleNumber } from "./solution";

it("singleNumber should return 1 for [2,2,1]", () => {
  const nums = [2, 2, 1];
  const result = singleNumber(nums);
  expect(result).toBe(1);
});

it("singleNumber should return 4 for [4,1,2,1,2]", () => {
  const nums = [4, 1, 2, 1, 2];
  const result = singleNumber(nums);
  expect(result).toBe(4);
});

it("singleNumber should return 4 for [1,2,4,1,2]", () => {
  const nums = [1, 2, 4, 1, 2];
  const result = singleNumber(nums);
  expect(result).toBe(4);
});

it("singleNumber should return 5 for [4,1,2,1,2,4,5]", () => {
  const nums = [4, 1, 2, 1, 2, 4, 5];
  const result = singleNumber(nums);
  expect(result).toBe(5);
});

it("singleNumber should return 1 for [1]", () => {
  const nums = [1];
  const result = singleNumber(nums);
  expect(result).toBe(1);
});
