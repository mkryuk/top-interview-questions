import { findDuplicate } from "./solution";

it("findDuplicate should return 2 for nums = [1,3,4,2,2]", () => {
  const nums = [1, 3, 4, 2, 2];
  expect(findDuplicate(nums)).toBe(2);
});

it("findDuplicate should return 3 for nums = [3,1,3,4,2]", () => {
  const nums = [3, 1, 3, 4, 2];
  expect(findDuplicate(nums)).toBe(3);
});
