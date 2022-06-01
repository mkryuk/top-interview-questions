import { longestConsecutive } from "./solution";

it("longestConsecutive should return 4 for nums = [100,4,200,1,3,2]", () => {
  const nums = [100, 4, 200, 1, 3, 2];
  expect(longestConsecutive(nums)).toBe(4);
});

it("longestConsecutive should return 9 for nums = [0,3,7,2,5,8,4,6,0,1]", () => {
  const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
  expect(longestConsecutive(nums)).toBe(9);
});

it("longestConsecutive should return 0 for nums = []", () => {
  const nums: number[] = [];
  expect(longestConsecutive(nums)).toBe(0);
});
