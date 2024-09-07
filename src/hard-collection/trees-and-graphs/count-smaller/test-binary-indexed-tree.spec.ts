import { countSmaller } from "./solution-binary-indexed-tree";

it("countSmaller should return [2,1,1,0] for nums = [5,2,6,1]", () => {
  const nums = [5, 2, 6, 1];
  const result = countSmaller(nums);
  expect(result).toEqual([2, 1, 1, 0]);
});

it("countSmaller should return [3,1,2,0,0] for nums = [5,2,6,1,3]", () => {
  const nums = [5, 2, 6, 1, 3];
  const result = countSmaller(nums);
  expect(result).toEqual([3, 1, 2, 0, 0]);
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

it("countSmaller should return [0,7,0,5,0,3,0,1,0] for nums = [1,9,2,8,3,7,4,6,5]", () => {
  const nums = [1, 9, 2, 8, 3, 7, 4, 6, 5];
  const result = countSmaller(nums);
  expect(result).toEqual([0, 7, 0, 5, 0, 3, 0, 1, 0]);
});

it("countSmaller should pass test 32", () => {
  const nums = [
    26, 78, 27, 100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98, 69, 81, 32, 78, 28, 94, 13, 2, 97, 3, 76,
    99, 51, 9, 21, 84, 66, 65, 36, 100, 41,
  ];
  const result = countSmaller(nums);
  expect(result).toEqual([
    10, 27, 10, 35, 12, 22, 28, 8, 19, 2, 12, 2, 9, 6, 12, 5, 17, 9, 19, 12, 14, 6, 12, 5, 12, 3, 0, 10, 0, 7, 8, 4, 0,
    0, 4, 3, 2, 0, 1, 0,
  ]);
});
