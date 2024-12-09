import { isArraySpecial } from "./solution";

describe("Special Array II", () => {
  it("isArraySpecial should return [false] for nums = [3,4,1,2,6], queries = [[0,4]]", () => {
    const nums = [3, 4, 1, 2, 6];
    const queries = [[0, 4]];
    const result = isArraySpecial(nums, queries);
    expect(result).toEqual([false]);
  });

  it("isArraySpecial should return [false, true] for nums = [4,3,1,6], queries = [[0,2],[2,3]]", () => {
    const nums = [4, 3, 1, 6];
    const queries = [
      [0, 2],
      [2, 3],
    ];
    const result = isArraySpecial(nums, queries);
    expect(result).toEqual([false, true]);
  });
});
