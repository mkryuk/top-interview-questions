import { countSmaller } from "./solution";

it("countSmaller should return [2,1,1,0] for nums = [5,2,6,1]", () => {
  const nums = [5, 2, 6, 1];
  const result = countSmaller(nums);
  expect(result).toEqual([2, 1, 1, 0]);
});

it("countSmaller should return [0] for nums = [-1]", () => {
  const nums = [-1];
  const result = countSmaller(nums);
  expect(result).toEqual([0]);
});

it("countSmaller should return [0,0] for nums = [-1,-1]", () => {
  const nums = [-1, -1];
  const result = countSmaller(nums);
  expect(result).toEqual([0, 0]);
});
