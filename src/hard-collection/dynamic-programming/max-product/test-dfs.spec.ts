import { maxProduct } from "./solution-dfs";

it("maxProduct should return 6 nums = [2,3,-2,4]", () => {
  const nums = [2, 3, -2, 4];
  const result = maxProduct(nums);
  expect(result).toEqual(6);
});

it("maxProduct should return 0 nums = [-2,0,-1]", () => {
  const nums = [-2, 0, -1];
  const result = maxProduct(nums);
  expect(result).toEqual(0);
});

it("maxProduct should return 12 nums = [2,3,-2,4,3]", () => {
  const nums = [2, 3, -2, 4, 3];
  const result = maxProduct(nums);
  expect(result).toEqual(12);
});

it("maxProduct should return 288 nums = [2,3,-2,4,3,-2]", () => {
  const nums = [2, 3, -2, 4, 3, -2];
  const result = maxProduct(nums);
  expect(result).toEqual(288);
});
