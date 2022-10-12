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

it("maxCoins should return 60 for nums = [5,1,5,1]", () => {
  const nums = [5, 1, 5, 1];
  const result = maxCoins(nums);
  expect(result).toBe(60);
});

it("maxCoins should return 30 for nums = [5,0,0,5]", () => {
  const nums = [5, 0, 0, 5];
  const result = maxCoins(nums);
  expect(result).toBe(30);
});
