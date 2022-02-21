import { majorityElement } from "./solution-one-line";

it("majorityElement should return 3 for nums = [3,2,3]", () => {
  const nums = [3, 2, 3];
  const result = majorityElement(nums);
  expect(result).toEqual(3);
});

it("majorityElement should return 2 for nums = [2,2,1,1,1,2,2]", () => {
  const nums = [2, 2, 1, 1, 1, 2, 2];
  const result = majorityElement(nums);
  expect(result).toEqual(2);
});

it("majorityElement should return 1 for nums = [1];", () => {
  const nums = [1];
  const result = majorityElement(nums);
  expect(result).toEqual(1);
});

it("majorityElement should return 1 for nums = [1,1];", () => {
  const nums = [1, 1];
  const result = majorityElement(nums);
  expect(result).toEqual(1);
});

it("majorityElement should return 1 for nums = [1,1,1]", () => {
  const nums = [1, 1, 1];
  const result = majorityElement(nums);
  expect(result).toEqual(1);
});

it("majorityElement should return 2 for nums = [1,1,1,2,2,2,2];", () => {
  const nums = [1, 1, 1, 2, 2, 2, 2];
  const result = majorityElement(nums);
  expect(result).toEqual(2);
});
