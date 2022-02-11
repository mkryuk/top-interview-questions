import { sortColors } from "./solution-one-pass";

it("sortColors should sort nums = [2,0,2,1,1,0] to [0,0,1,1,2,2]", () => {
  const nums = [2, 0, 2, 1, 1, 0];
  sortColors(nums);
  expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
});

it("sortColors should sort nums = [2,0,1] to [0,1,2]", () => {
  const nums = [2, 0, 1];
  sortColors(nums);
  expect(nums).toEqual([0, 1, 2]);
});

it("sortColors should sort nums = [1,0,0,0,0,0] to [0,0,0,0,0,1]", () => {
  const nums = [1, 0, 0, 0, 0, 0];
  sortColors(nums);
  expect(nums).toEqual([0, 0, 0, 0, 0, 1]);
});

it("sortColors should sort nums = [2,0,0,1,1,0,0,2,0,0] to [0,0,0,0,0,0,1,1,2,2]", () => {
  const nums = [2, 0, 0, 1, 1, 0, 0, 2, 0, 0];
  sortColors(nums);
  expect(nums).toEqual([0, 0, 0, 0, 0, 0, 1, 1, 2, 2]);
});

it("sortColors should sort nums = [2,0,2,1,1,0] to [0,0,1,1,2,2]", () => {
  const nums = [2, 0, 2, 1, 1, 0];
  sortColors(nums);
  expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
});
