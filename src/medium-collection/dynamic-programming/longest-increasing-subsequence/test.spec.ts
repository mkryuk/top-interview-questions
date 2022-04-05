import { lengthOfLIS } from "./solution";

it("lengthOfLIS should return 4 for nums = [10,9,2,5,3,7,101,18]", () => {
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
  const result = lengthOfLIS(nums);
  expect(result).toBe(4);
});

it("lengthOfLIS should return 4 for nums = [0,1,0,3,2,3]", () => {
  const nums = [0, 1, 0, 3, 2, 3];
  const result = lengthOfLIS(nums);
  expect(result).toBe(4);
});

it("lengthOfLIS should return 1 for nums = [7,7,7,7,7,7,7]", () => {
  const nums = [7, 7, 7, 7, 7, 7, 7];
  const result = lengthOfLIS(nums);
  expect(result).toBe(1);
});
