import { firstMissingPositive } from "./solution";

it("firstMissingPositive should return 3 for nums = [1,2,0]", () => {
  const nums = [1, 2, 0];
  expect(firstMissingPositive(nums)).toBe(3);
});

it("firstMissingPositive should return 2 for nums = [3,4,-1,1]", () => {
  const nums = [3, 4, -1, 1];
  expect(firstMissingPositive(nums)).toBe(2);
});

it("firstMissingPositive should return 1 for nums = [7,8,9,11,12]", () => {
  const nums = [7, 8, 9, 11, 12];
  expect(firstMissingPositive(nums)).toBe(1);
});

it("firstMissingPositive should return 11 for nums = [1,2,3,4,5,6,7,8,9,10]", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(firstMissingPositive(nums)).toBe(11);
});

it("firstMissingPositive should return 1 for nums = [2,3,4,5,6,7,8,9,10]", () => {
  const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(firstMissingPositive(nums)).toBe(1);
});

it("firstMissingPositive should return 5 for nums = [1,2,3,4,6,7,8,9,10]", () => {
  const nums = [1, 2, 3, 4, 6, 7, 8, 9, 10];
  expect(firstMissingPositive(nums)).toBe(5);
});
