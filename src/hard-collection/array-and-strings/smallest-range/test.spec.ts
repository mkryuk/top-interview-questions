import { smallestRange } from "./solution";

describe("Smallest Range Covering Elements from K Lists", () => {
  it("smallestRange should return [20,24] for nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]", () => {
    const nums = [
      [4, 10, 15, 24, 26],
      [0, 9, 12, 20],
      [5, 18, 22, 30],
    ];
    const result = smallestRange(nums);
    expect(result).toEqual([20, 24]);
  });

  it("smallestRange should return [1,1] for nums = [[1,2,3],[1,2,3],[1,2,3]]", () => {
    const nums = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];
    const result = smallestRange(nums);
    expect(result).toEqual([1, 1]);
  });
});
