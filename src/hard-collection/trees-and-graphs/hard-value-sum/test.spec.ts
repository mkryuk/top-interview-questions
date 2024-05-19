import { maximumValueSum } from "./solution";

describe("Find the Maximum Sum of Node Values", () => {
  it("maximumValueSum should return 6 for nums = [1,2,1], k = 3, edges = [[0,1],[0,2]]", () => {
    const nums = [1, 2, 1];
    const k = 3;
    const edges = [
      [0, 1],
      [0, 2],
    ];
    const result = maximumValueSum(nums, k, edges);
    expect(result).toEqual(6);
  });

  it("maximumValueSum should return 9 for nums = [2,3], k = 7, edges = [[0,1]]", () => {
    const nums = [2, 3];
    const k = 7;
    const edges = [[0, 1]];
    const result = maximumValueSum(nums, k, edges);
    expect(result).toEqual(9);
  });

  it("maximumValueSum should return 42 for nums = [7,7,7,7,7,7], k = 3, edges = [[0,1],[0,2],[0,3],[0,4],[0,5]]", () => {
    const nums = [7, 7, 7, 7, 7, 7];
    const k = 3;
    const edges = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
    ];
    const result = maximumValueSum(nums, k, edges);
    expect(result).toEqual(42);
  });
});
