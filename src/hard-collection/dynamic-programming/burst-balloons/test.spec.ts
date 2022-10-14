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

it("maxCoins should return 669494 for nums = [9,76,64,21,97]", () => {
  const nums = [9, 76, 64, 21, 97];
  const result = maxCoins(nums);
  expect(result).toBe(669494);
});

it("maxCoins should return 1700 for nums = [10,20,3,4,5]", () => {
  const nums = [10, 20, 3, 4, 5];
  const result = maxCoins(nums);
  expect(result).toBe(1700);
});

it("maxCoins should return 3394 for nums = [8,3,4,3,5,0,5,6,6,2,8,5,6,2,3,8,3,5,1,0,2]", () => {
  const nums = [8, 3, 4, 3, 5, 0, 5, 6, 6, 2, 8, 5, 6, 2, 3, 8, 3, 5, 1, 0, 2];
  const result = maxCoins(nums);
  expect(result).toBe(3394);
});
