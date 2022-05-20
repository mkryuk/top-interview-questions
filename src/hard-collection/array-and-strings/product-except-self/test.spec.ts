import { productExceptSelf } from "./solution";

it("productExceptSelf should return [24,12,8,6] for nums = [1,2,3,4]", () => {
  expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

it("productExceptSelf should return [0,0,9,0,0] for nums = [-1,1,0,-3,3]", () => {
  expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
});

it("productExceptSelf should return [1920,960,640,480,384] for nums = [2,4,6,8,10]", () => {
  expect(productExceptSelf([2, 4, 6, 8, 10])).toEqual([
    1920, 960, 640, 480, 384,
  ]);
});

it("productExceptSelf should return [24,30,40,60,120] for nums = [5,4,3,2,1]", () => {
  expect(productExceptSelf([5, 4, 3, 2, 1])).toEqual([24, 30, 40, 60, 120]);
});
