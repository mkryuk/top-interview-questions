import { moveZeroes } from "./solution";

it("moveZeroes should return [1,3,12,0,0] for nums = [0,1,0,3,12]", () => {
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([1, 3, 12, 0, 0]);
});

it("moveZeroes should return [3,12,0,0,0] for nums = [0,0,0,3,12]", () => {
  const nums = [0, 0, 0, 3, 12];
  moveZeroes(nums);
  expect(nums).toEqual([3, 12, 0, 0, 0]);
});

it("moveZeroes should return [3,12,0,0,0] for nums = [3,12,0,0,0]", () => {
  const nums = [3, 12, 0, 0, 0];
  moveZeroes(nums);
  expect(nums).toEqual([3, 12, 0, 0, 0]);
});

it("moveZeroes should return [0] for nums = [0]", () => {
  const nums = [0];
  moveZeroes(nums);
  expect(nums).toEqual([0]);
});
