import { rotate } from "./solution";

it("should rotate array [1,2,3,4,5,6,7] by 3", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7];

  rotate(nums, 3);
  expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
});

it("should rotate array [1,2,3,4,5,6,7,8] by 3", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

  rotate(nums, 3);
  expect(nums).toEqual([6, 7, 8, 1, 2, 3, 4, 5]);
});

it("should rotate array [1,2,3,4,5,6,7,8] by 4", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];

  rotate(nums, 4);
  expect(nums).toEqual([5, 6, 7, 8, 1, 2, 3, 4]);
});

it("should rotate array [-1,-100,3,99] with 2", () => {
  const nums = [-1, -100, 3, 99];

  rotate(nums, 2);
  expect(nums).toEqual([3, 99, -1, -100]);
});

it("should rotate array [-1] by 2", () => {
  const nums = [-1];

  rotate(nums, 2);
  expect(nums).toEqual([-1]);
});
