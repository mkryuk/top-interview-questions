import { subsets } from "./solution";
import { arrayEquals } from "../common";

it("subsets should return [[],[0]] for nums = [0]", function () {
  const nums = [0];
  const expectedResult = [[], [0]];
  const subsetsResult = subsets(nums);
  expect(expectedResult.length).toEqual(subsetsResult.length);
  expectedResult.forEach((item) => {
    const result = subsetsResult.some((p) => arrayEquals(p, item));
    expect(result).toBeTrue();
  });
});

it("subsets should return [[],[0],[1],[0,1]] for nums = [0]", function () {
  const nums = [0, 1];
  const expectedResult = [[], [0], [1], [0, 1]];
  const subsetsResult = subsets(nums);
  expect(expectedResult.length).toEqual(subsetsResult.length);
  expectedResult.forEach((item) => {
    const result = subsetsResult.some((p) => arrayEquals(p, item));
    expect(result).toBeTrue();
  });
});

it("subsets should return [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] for nums = [1,2,3]", function () {
  const nums = [1, 2, 3];
  const expectedResult = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
  const subsetsResult = subsets(nums);
  expect(expectedResult.length).toEqual(subsetsResult.length);
  expectedResult.forEach((item) => {
    const result = subsetsResult.some((p) => arrayEquals(p, item));
    expect(result).toBeTrue();
  });
});

it("subsets should return correct result for nums = [1,2,3,4]", function () {
  const nums = [1, 2, 3, 4];
  const expectedResult = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [1, 2, 4],
    [1, 2],
    [1, 3, 4],
    [1, 3],
    [1, 4],
    [1],
    [2, 3, 4],
    [2, 3],
    [2, 4],
    [2],
    [3, 4],
    [3],
    [4],
    [],
  ];
  const subsetsResult = subsets(nums);
  expect(expectedResult.length).toEqual(subsetsResult.length);
  expectedResult.forEach((item) => {
    const result = subsetsResult.some((p) => arrayEquals(p, item));
    expect(result).toBeTrue();
  });
});
