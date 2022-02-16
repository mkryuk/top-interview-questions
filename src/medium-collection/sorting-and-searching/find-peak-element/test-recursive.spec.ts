import { findPeakElement } from "./solution-recursive";

it("findPeakElement should return 2 for nums = [1,2,3,1]", () => {
  const nums = [1, 2, 3, 1];
  const result = findPeakElement(nums);
  expect(result).toEqual(2);
});

it("findPeakElement should return 5 for nums = [1,2,1,3,5,6,4]", () => {
  const nums = [1, 2, 1, 3, 5, 6, 4];
  const result = findPeakElement(nums);
  expect(result).toEqual(5);
});

it("findPeakElement should return 0 for nums = [1]", () => {
  const nums = [1];
  const result = findPeakElement(nums);
  expect(result).toEqual(0);
});

it("findPeakElement should return 1 for nums = [1,2]", () => {
  const nums = [1, 2];
  const result = findPeakElement(nums);
  expect(result).toEqual(1);
});

it("findPeakElement should return 0 for nums = [2,1]", () => {
  const nums = [2, 1];
  const result = findPeakElement(nums);
  expect(result).toEqual(0);
});
