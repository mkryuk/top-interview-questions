import { productExceptSelf } from "./solution";

it("productExceptSelf should return [24,12,8,6] for nums = [1,2,3,4]", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

it("productExceptSelf should return [0,0,0,0] for nums = [-1,1,0,-3,3]", () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 0, 0]);
});
