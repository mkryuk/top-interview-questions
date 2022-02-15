import { findPeakElement } from "./solution";

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
