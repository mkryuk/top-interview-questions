import { containsDuplicate } from "./solution";

it("containsDuplicate should return true for [1,2,3,1]", () => {
  const nums = [1, 2, 3, 1];
  const result = containsDuplicate(nums);
  expect(result).toBe(true);
});

it("containsDuplicate should return false for [1,2,3,4]", () => {
  const nums = [1, 2, 3, 4];
  const result = containsDuplicate(nums);
  expect(result).toBe(false);
});

it("containsDuplicate should return true for [1,1,1,3,3,4,3,2,4,2]", () => {
  const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  const result = containsDuplicate(nums);
  expect(result).toBe(true);
});
