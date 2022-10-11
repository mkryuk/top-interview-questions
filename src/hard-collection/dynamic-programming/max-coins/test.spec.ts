import { maxCoins } from "./solution";

it("maxCoins should return 167 for nums = [3,1,5,8]", () => {
  const nums = [3, 1, 5, 8];
  const result = maxCoins(nums);
  expect(result).toBe(167);
});

it("maxCoins should return 10 for nums = [1,5]", () => {
  const nums = [1, 5];
  const result = maxCoins(nums);
  expect(result).toBe(10);
});
